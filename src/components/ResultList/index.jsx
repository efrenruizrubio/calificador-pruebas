import { NavLink, Filter, Card } from '../../components/index'
import { useState, useEffect } from 'react'
import { resultsService } from '../../services/index'
import styles from './ResultList.module.scss'

export const ResultList = () => {
  const [results, setResults] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [paginator, setPaginator] = useState({ page: 1, limit: 10 })
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    resultsService.getCount().then((res) => {
      if (!res.data['COUNT(Id)'] === 0) return

      setTotalPages(Math.ceil(res.data['COUNT(Id)'] / paginator.limit))
      resultsService.getAll(paginator).then((res) => {
        setResults(res.data)
        setFilteredResults(res.data)
      })
    })
  }, [])

  /* useEffect(() => {
    resultsService.getAll(paginator).then((res) => {
      setFilter('')
      setResults(res.data)
      setFilteredResults(res.data)
    })
  }, [paginator]) */

  useEffect(() => {
    setFilteredResults(results.filter(r => r.patient.name.toLowerCase().startsWith(filter)))
  }, [filter])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    setPaginator()
  }

  return (
    <section className={styles.result}>
      <h1 className={styles.result_title}>Resultados</h1>
      <Filter type='text' value={filter} placeholder='Buscar resultado por nombre de paciente' className={styles.result_filter} handleChange={handleFilterChange} />
      <ul className={styles.result_list}>
        {filteredResults.length
          ? filteredResults.map((result) => {
            return (
              <li key={result.id}>
                <Card elements={[{ name: 'Nombre del paciente: ', value: <NavLink to={`/resultados/${result.id}`}>{result.patient.name}</NavLink> }, { name: 'Edad del paciente: ', value: result.patient.age }, { name: 'Test aplicado: ', value: result.appliedTest }, { name: 'Resultado: ', value: result.status }]} className={styles.result_list_card} id={result.id} />
                {/* <div className={styles.result_list_card}>

                  <p className={styles.result_list_card_link}>
                    Nombre del paciente: <NavLink to={`/resultados/${result.id}`}>{result.patient.name}</NavLink>
                  </p>
                  <p className={styles.result_list_card_data}>
                    Edad del paciente: {result.patient.age}
                  </p>
                  <p className={styles.result_list_card_data}>
                    Test aplicado: {result.appliedTest}
                  </p>
                  <p className={styles.result_list_card_data}>
                    Resultado: {result.status}
                  </p>
                </div> */}
              </li>
            )
          })
          : <p>No hay resultados</p>}
      </ul>

      {totalPages > 0 && (
        <div className={styles.result_paginator}>
          <span>{totalPages}</span>
        </div>

      )}
    </section>
  )
}
