import { useParams } from 'react-router-dom'
import { tests } from '../../utils/index'

export const Test = () => {
  const id = Number(useParams().id)
  const test = tests.find(test => test.id === id)
  console.log(test)
  return (
    <div>
      <h1>Calificador: {test.name}</h1>
    </div>
  )
}
