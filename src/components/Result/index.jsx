import { useContext } from 'react'
import ResultsContext from '../../context/ResultsContext'

export const Result = () => {
  const resultContext = useContext(ResultsContext)
  console.log(resultContext.results)
  return (
    <div>
      <h1>Resultados</h1>
    </div>
  )
}
