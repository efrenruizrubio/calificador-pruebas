import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { tests } from '../../utils/index'
import styles from './Test.module.scss'
import { resultsService } from '../../services/index'

export const Test = () => {
  const [patientName, setPatientName] = useState({ value: '', error: '' })
  const [patientEmail, setPatientEmail] = useState({ value: '', error: '' })
  const [patientAge, setPatientAge] = useState({ value: '', error: '' })
  const [answers, setAnswers] = useState([])
  const [dynamicInputs, setDynamicInputs] = useState([])

  const [canSubmit, setCanSubmit] = useState(false)

  const id = Number(useParams().id)
  const test = tests.find((test) => test.id === id)

  const handleName = (e) => {
    if (!e.target.value) {
      setPatientName({ value: '', error: 'El nombre no puede estar vacío' })
    } else {
      setPatientName({ value: e.target.value, error: '' })
    }
  }

  const handleEmail = (e) => {
    if (!e.target.value) {
      setPatientEmail({
        value: '',
        error: 'El correo electrónico del paciente no puede estar vacío'
      })
    } else {
      setPatientEmail({ value: e.target.value, error: '' })
    }
  }

  const handleAge = (e) => {
    if (e.target.value) {
      if (isNaN(Number(e.target.value))) {
        setPatientAge({
          value: '',
          error: 'La edad no puede incluír caracteres no numéricos'
        })
      } else {
        setPatientAge({ value: e.target.value, error: '' })
      }
    } else {
      setPatientAge({ value: '', error: 'La edad no puede estar vacía' })
    }
  }

  const handleChange = (e, index, section) => {
    setAnswers((prev) => {
      const element = prev.findIndex((el) => el.option === e.target.name)
      if (prev[element]) {
        prev.splice(element, 1)
      }
      const elements = [
        ...prev,
        {
          option: e.target.name,
          value: Number(e.target.value),
          index,
          ...(section && { section })
        }
      ]
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
    const score = answers.reduce((acc, curr) => acc + curr.value, 0)
    const testResults = answers.sort((a, b) => a.index - b.index)
    const newResult = {
      name: patientName.value,
      email: patientEmail.value,
      age: patientAge.value,
      score,
      testResults,
      appliedTest: id
    }
    if (id === 1) {
      let status = ''
      if (score <= 13) status = 'Depresión mínima'
      if (score > 13 && score <= 19) status = 'Depresión leve'
      if (score > 19 && score <= 28) status = 'Depresión moderada'
      if (score > 28 && score <= 63) status = 'Depresión grave'
      newResult.status = status
    }
    if (id === 2) {
      const grouped = testResults.reduce((acc, obj) => {
        const key = obj.section
        if (!acc[key]) {
          acc[key] = { questions: 0, valueSum: 0, indicator: key, nonPositive: 0 }
        }
        acc[key].questions++
        acc[key].valueSum += obj.value
        if (obj.value < 1) acc[key].nonPositive++
        return acc
      }, {})

      const nonPositive = Object.values(grouped).reduce((acc, curr) => {
        acc += curr.nonPositive
        return acc
      }, 0)

      const questions = test.questions.length
      const igs = { indicator: 'IGS', result: score / questions }
      const tsp = { indicator: 'TSP', result: questions - nonPositive }
      const imsp = { indicator: 'IMSP', result: score / tsp.result }

      const indicators = Object.entries(grouped).map((group) => {
        const element = group[1]
        return {
          indicator: element.indicator,
          result: element.valueSum / element.questions
        }
      }).concat([igs, tsp, imsp])

      newResult.indicators = indicators
    }
    if (id === 3) {
      console.log('3')
    }

    console.log(newResult)
    resultsService
      .createResult(newResult)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <section className={styles.test}>
      <h1 className={styles.test_title}>Calificador: {test.name}</h1>

      <form className={styles.test_form} onSubmit={handleSubmit}>
        <div className={styles.test_form_input}>
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
          {patientName.error && (
            <p className={styles.test_form_input_error}>{patientName.error}</p>
          )}
        </div>
        <div className={styles.test_form_input}>
          <label htmlFor='patientEmail'>
            Correo electrónico del paciente:{' '}
          </label>
          <input
            type='text'
            value={patientEmail.value}
            required
            onChange={handleEmail}
            name='patientEmail'
            id='patientEmail'
            placeholder='Correo electrónico'
            onBlur={handleEmail}
          />
          {patientEmail.error && (
            <p className={styles.test_form_input_error}>{patientEmail.error}</p>
          )}
        </div>
        <div className={styles.test_form_input}>
          <label htmlFor='patientAge'>Edad del paciente: </label>
          <input
            type='text'
            value={patientAge.value}
            required
            onChange={handleAge}
            name='patientAge'
            id='patientAge'
            inputMode='numeric'
            placeholder='Edad'
            onBlur={handleAge}
          />
          {patientAge.error && (
            <p className={styles.test_form_input_error}>{patientAge.error}</p>
          )}
        </div>
        {test.questions &&
          test.questions.map((question) => {
            return (
              <div
                className={styles.test__form_question}
                key={question.question}
              >
                <h3 className={styles.test_form_question_title}>
                  {`${question.index}.- ${question.question}`}
                </h3>
                <div className={styles.test_form_question_answers}>
                  {question.answers.map((answer) => {
                    return (
                      <div
                        className={styles.test_form_question_answers_container}
                        key={`${question.question}-${answer.option}`}
                      >
                        <input
                          type='radio'
                          name={question.question}
                          id={`${question.question} ${answer.option}`}
                          value={answer.value}
                          className={
                            styles.test_form_question_answers_container_input
                          }
                          onChange={(e) =>
                            handleChange(e, question.index, question?.section)}
                        />
                        <label
                          className={
                            styles.test_form_question_answers_container_label
                          }
                          htmlFor={`${question.question} ${answer.option}`}
                        >
                          {answer.option}
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        <button className={styles.test_form_submit} disabled={!canSubmit}>
          Calificar prueba
        </button>
      </form>
    </section>
  )
}
