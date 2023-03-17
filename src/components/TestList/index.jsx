import { Link } from 'react-router-dom'
import { tests } from '../../utils/index'
import styles from './TestList.module.scss'

export const TestList = () => {
  return (
    <section className={styles.tests}>
      <h1 className={styles.tests_title}>Tests</h1>
      <h3 className={styles.tests_description}>Seleccione el test a aplicar: </h3>
      <ul className={styles.tests_list}>
        {tests && tests.map((test) => (
          <li key={test.id}>
            <Link to={`/tests/${test.id}`} className={styles.tests_list_element}>
              <h3>{test.name}</h3>
            </Link>
          </li>))}
      </ul>
    </section>
  )
}
