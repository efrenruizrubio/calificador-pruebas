import { NavLink } from '../../components/index'
import { useState, useEffect } from 'react'
import { getAll } from '../../services/index'
import styles from './ResultList.module.scss'

export const ResultList = () => {
  const [results, setResults] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getAll().then((res) => setResults(res.data))
  }, [])

  return (
    <section className={styles.result}>
      <h1 className={styles.result_title}>Resultados</h1>
      <input
        type='text'
        value={filter}
        placeholder='Buscar por nombre de paciente'
        className={styles.result_filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul className={styles.result_list}>
        {results.length &&
          results
            .filter((r) =>
              r.patient.name
                .toLowerCase()
                .startsWith(filter.toLocaleLowerCase())
            )
            .map((result) => {
              return (
                <li key={result.id}>
                  <div className={styles.result}>

                    <p className={styles.result_link}>
                      Nombre del paciente: <NavLink to={`/resultados/${result.id}`}>{result.patient.name}</NavLink>
                    </p>
                    <p className={styles.result_data}>
                      Edad del paciente: {result.patient.age}
                    </p>
                    <p className={styles.result_data}>
                      Test aplicado: {result.appliedTest}
                    </p>
                    <p className={styles.result_data}>
                      Resultado: {result.status}
                    </p>
                  </div>
                </li>
              )
            })}
      </ul>
    </section>
  )
}
