import { NavLink } from '../../components/index'
import { useState, useEffect } from 'react'
import { resultsService } from '../../services/index'
import styles from './ResultList.module.scss'

export const ResultList = () => {
  const [results, setResults] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredResults, setFilteredResults] = useState([])

  useEffect(() => {
    resultsService.getAll().then((res) => {
      setResults(res.data)
      setFilteredResults(res.data)
    })
  }, [])

  useEffect(() => {
    setFilteredResults(results.filter(r => r.patient.name.toLowerCase().startsWith(filter)))
  }, [filter])

  return (
    <section className={styles.result}>
      <h1 className={styles.result_title}>Resultados</h1>
      <input
        type='text'
        value={filter}
        placeholder='Buscar por nombre de paciente'
        className={styles.result_filter}
        onChange={(e) => setFilter(e.target.value.toLowerCase())}
      />

      <ul className={styles.result_list}>
        {filteredResults.length
          ? filteredResults.map((result) => {
            return (
              <li key={result.id}>
                <div className={styles.result_list_card}>

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
                </div>
              </li>
            )
          })
          : <p>No hay resultados</p>}
      </ul>
    </section>
  )
}
