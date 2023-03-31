import { useParams } from 'react-router-dom'

export const Result = () => {
  const id = Number(useParams().id)
  return (
    <div>
      <h1>ID del resultado: {id}</h1>
    </div>
  )
}
