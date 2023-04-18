import { NavLink, Filter, Card, Paginator, Select } from '../../components/index'
import { useState, useEffect, useRef } from 'react'
import { resultsService } from '../../services/index'
import styles from './ResultList.module.scss'

export const ResultList = () => {
  const [results, setResults] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [elementsPerPage, setElementsPerPage] = useState(10)
  const [filter, setFilter] = useState('')
  const [filteredResults, setFilteredResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const isFirstRunFilter = useRef(true)
  const isFirstRunSelect = useRef(true)
  const secondaryFilter = useRef('')

  useEffect(() => {
    resultsService.getCount(undefined).then((count) => {
      if (!count.data['COUNT(Id)'] === 0) return
      resultsService.getAll({ page: currentPage, limit: elementsPerPage }).then((res) => {
        setTotalResults(count.data['COUNT(Id)'])
        setResults(res.data)
        setFilteredResults(res.data)
      })
    })
  }, [])

  useEffect(() => {
    if (isFirstRunFilter.current) {
      isFirstRunFilter.current = false
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

  useEffect(() => {
    if (isFirstRunSelect.current) {
      isFirstRunSelect.current = false
      return
    }
    resultsService.getAll({ page: currentPage, limit: elementsPerPage }).then((res) => {
      setResults(res.data)
      setFilteredResults(res.data)
    })
      .catch((err) => {
        console.error(err.response.data.error)
      })
  }, [currentPage, elementsPerPage])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    secondaryFilter.current = e.target.value
  }

  const handleElementsPerPage = (e) => {
    setCurrentPage(1)
    setElementsPerPage(Number(e.target.value))
  }

  return (
    <section className={styles.result}>
      <h1 className={styles.result_title}>Resultados</h1>
      <Filter type='text' value={filter} placeholder='Buscar resultado por nombre de paciente' className={styles.result_filter} handleChange={handleFilterChange} />
      <Select options={[10, 25, 50, 100]} label='Elementos por página' handleChange={handleElementsPerPage} />
      <ul className={styles.result_list}>
        {filteredResults.length
          ? filteredResults.map((result) => {
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
      {totalResults > 0 && <Paginator elementsPerPage={elementsPerPage} totalElements={totalResults} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </section>
  )
}
