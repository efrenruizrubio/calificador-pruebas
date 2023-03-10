import { tests } from '../utils/index'
import { Link } from 'react-router-dom'

export const TestsPage = () => {
  return (
    <section>
      <h1>Tests</h1>
      <p>Selecciona un test a aplicar: </p>
      <ul>
        {tests && tests.map((test) => (
          <li key={test.id}>
            <Link to={`/tests/${test.id}`}>
              {test.name}
            </Link>
          </li>))}
      </ul>
    </section>
  )
}
