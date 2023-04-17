import { NavLink, Filter, Card, Paginator } from '../../components/index'
import { useState, useEffect, useRef } from 'react'
import { resultsService } from '../../services/index'
import styles from './ResultList.module.scss'

export const ResultList = () => {
  const [results, setResults] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [filter, setFilter] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const isFirstRun = useRef(true)
  const secondaryFilter = useRef('')

  useEffect(() => {
    resultsService.getCount(undefined).then((count) => {
      if (!count.data['COUNT(Id)'] === 0) return
      resultsService.getAll().then((res) => {
        setTotalResults(count.data['COUNT(Id)'])
        setResults(res.data)
        setFilteredResults(res.data)
      })
    })
  }, [])

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    setTimeout(() => {
      if (filter === secondaryFilter.current && filter) {
        resultsService.getFiltered({ filter })
          .then((res) => {
            setFilteredResults(res.data)
          })
          .catch((err) => {
            setFilteredResults([])
            console.error(err.response.data.error)
          })
      } else setFilteredResults(results)
    }, 500)
  }, [filter])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    secondaryFilter.current = e.target.value
  }

  return (
    <section className={styles.result}>
      <h1 className={styles.result_title}>Resultados</h1>
      <Filter type='text' value={filter} placeholder='Buscar resultado por nombre de paciente' className={styles.result_filter} handleChange={handleFilterChange} />
      <ul className={styles.result_list}>
        {filteredResults.length
          ? filteredResults.slice(((currentPage * 10) - 10), ((currentPage * 10))).map((result) => {
            return (
              <li key={result.id}>
                <Card
                  elements={
                    [{ name: 'Id: ', value: result.id },
                      { name: 'Nombre del paciente: ', value: <NavLink to={`/resultados/${result.id}`}>{result.patient.name}</NavLink> },
                      { name: 'Edad del paciente: ', value: result.patient.age }, { name: 'Test aplicado: ', value: result.appliedTest },
                      { name: 'Resultado: ', value: result.status }]
}
                  id={result.id}
                />
              </li>
            )
          })
          : <p>No hay resultados</p>}
      </ul>
      {totalResults > 0 && <Paginator elementsPerPage={10} totalElements={totalResults} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </section>
  )
}
