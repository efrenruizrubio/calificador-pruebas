import { useState, useEffect } from 'react'
import { getAll } from '../../services/index'
import styles from './Result.module.scss'

export const Result = () => {
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
                  <div>
                    <h3>{result.patient.name}</h3>
                    <p>{result.patient.age}</p>
                    <p>{result.score}</p>
                  </div>
                </li>
              )
            })}
      </ul>
    </section>
  )
}
