import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tests } from '../../utils/index'
import styles from './Test.module.scss'

export const Test = () => {
  const [patientName, setPatientName] = useState({ value: '', error: '' })
  const [patientAge, setPatientAge] = useState({ value: '', error: '' })
  const [answers, setAnswers] = useState([])

  const [canSubmit, setCanSubmit] = useState(false)

  const id = Number(useParams().id)
  const test = tests.find(test => test.id === id)

  const handleName = (e) => {
    if (!e.target.value) {
      setPatientName({ value: '', error: 'El nombre no puede estar vacío' })
    } else {
      setPatientName({ value: e.target.value, error: '' })
    }
  }

  const handleAge = (e) => {
    if (isNaN(Number(e.target.value))) {
      setPatientAge({ value: '', error: 'La edad no puede incluír caracteres no numéricos' })
    } else {
      setPatientAge({ value: e.target.value, error: '' })
    }
  }

  const handleChange = (e) => {
    setAnswers((prev) => {
      const element = prev.findIndex((el) => el.option === e.target.name)
      if (prev[element]) {
        prev.splice(element, 1)
      }
      const elements = [...prev, { option: e.target.name, value: Number(e.target.value) }]
      if (elements.length === test.questions.length) {
        setCanSubmit(true)
      } else {
        setCanSubmit(false)
      }
      return elements
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(answers)
  }

  return (
    <section className={styles.test}>
      <h1 className={styles.test_title}>Calificador: {test.name}</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.test_input}>
          <label htmlFor='patientName'>Nombre del paciente: </label>
          <input
            type='text'
            value={patientName.value}
            required
            onChange={handleName}
            name='patientName'
            id='patientName'
            placeholder='Nombre'
            onBlur={handleName}
          />
          {patientName.error && <p className={styles.test_input_error}>{patientName.error}</p>}
        </div>
        <div className={styles.test_input}>
          <label htmlFor='patientAge'>Edad del paciente: </label>
          <input
            type='text'
            value={patientAge.value}
            required onChange={handleAge}
            name='patientAge'
            id='patientAge'
            inputMode='numeric'
            placeholder='Edad'
          />
          {patientAge.error && <p className={styles.test_input_error}>{patientAge.error}</p>}
        </div>
        {test.questions.map((question) => {
          return (
            <div className={styles.test_question} key={question.question}>
              <h3 className={styles.test_question_title}>{question.question}</h3>
              <div className={styles.test_question_answers}>
                {question.answers.map((answer) => {
                  return (
                    <div key={answer.option}>
                      <input
                        type='radio'
                        name={question.question}
                        id={`${question.question} ${answer.option}`}
                        value={answer.value}
                        onChange={handleChange}
                      />
                      <label htmlFor={answer.option}>{answer.option}</label>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
        <button disabled={!canSubmit}>Submit</button>
      </form>
    </section>
  )
}
