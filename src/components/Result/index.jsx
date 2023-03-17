import { useState, useEffect } from 'react'
import { getAll } from '../../services/index'

export const Result = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    getAll().then((res) => setResults(res.data))
  }, [])
  return (
    <div>
      <h1>Resultados</h1>
      <ul>
        {results.length && results.map((result) => {
          return (
            <li key={result.id}>
              <div>
                <h3>{result.name}</h3>
                <p>{result.age}</p>
                <p>{result.score}</p>
              </div>

            </li>

          )
        })}
      </ul>
    </div>
  )
}
