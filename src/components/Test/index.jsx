import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Input } from '../index'
import { tests } from '../../utils/index'
import styles from './Test.module.scss'
import { resultsService } from '../../services/index'

export const Test = () => {
  const id = Number(useParams().id)
  const test = tests.find((test) => test.id === id)

  // const [patientName, setPatientName] = useState({ value: '', error: '' })
  const [answers, setAnswers] = useState([])
  const [dynamicInputs, setDynamicInputs] = useState(Array.from({ length: test.inputs.length }, () => ({ value: '', error: '' })))

  const [canSubmit, setCanSubmit] = useState(false)

  // const handleName = (e) => {
  //   if (!e.target.value) {
  //     setPatientName({ value: '', error: 'El nombre no puede estar vacío' })
  //   } else {
  //     setPatientName({ value: e.target.value, error: '' })
  //   }
  // }

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
      /* newResult.date = new Date() */
      console.log(new Date().toLocaleDateString())
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

    resultsService
      .createResult(newResult)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleInputChange = (e, i, error) => {
    if (!e.target.value && !dynamicInputs[i].error) {
      setDynamicInputs((prev) => {
        const newInputs = [...prev]
        newInputs[i].error = error
        return newInputs
      })
    } else {
      setDynamicInputs((prev) => {
        const newInputs = [...prev]
        newInputs[i].value = e.target.value
        newInputs[i].error = ''
        return newInputs
      })
    }
    console.log(dynamicInputs[i])
  }
  console.log('debug')
  return (
    <section className={styles.test}>
      <h1 className={styles.test_title}>Calificador: {test.name}</h1>
      <form className={styles.test_form} onSubmit={handleSubmit}>
        {test.inputs && test.inputs.map((input, i) => {
          const { label, type, name, error } = input
          return <Input key={input.name} inputProps={{ label, type, name, value: dynamicInputs[i], handleChange: (e) => handleInputChange(e, i, error) }} />
        }
        )}
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
