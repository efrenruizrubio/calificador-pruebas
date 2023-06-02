import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Input } from '../index'
import { tests } from '../../utils/index'
import styles from './Test.module.scss'
import { resultsService, qualificatorsService } from '../../services/index'

export const Test = () => {
  const id = Number(useParams().id)
  const test = tests.find((test) => test.id === id)

  const [answers, setAnswers] = useState([])
  const [dynamicInputs, setDynamicInputs] = useState(Array.from({ length: test.inputs.length }, () => ({ name: '', value: '', error: '' })))

  const [canSubmit, setCanSubmit] = useState(false)

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
    const inputs = dynamicInputs.map((input) => ({ name: input.name, value: input.value }))

    const newResult = {
      inputs,
      score,
      testResults,
      appliedTest: id
    }

    if (id === 1) {
      const status = qualificatorsService.beckDepressionInventory({ score })
      newResult.status = status
    }
    if (id === 2) {
      const indicators = qualificatorsService.derogatisSymptomsInventory({ score, testResults })
      newResult.indicators = indicators
    }
    if (id === 3) {
      const status = qualificatorsService.beckAnxietyInventory({ score })
      newResult.status = status
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

  const handleInputChange = ({ event, index, error, name }) => {
    if (!event.target.value && !dynamicInputs[index].error) {
      setDynamicInputs((prev) => {
        const newInputs = [...prev]
        newInputs[index].error = error
        newInputs[index].value = ''
        return newInputs
      })
    }
    if (event.target.value) {
      setDynamicInputs((prev) => {
        const newInputs = [...prev]
        newInputs[index].value = event.target.value
        newInputs[index].name = name
        newInputs[index].error = ''
        return newInputs
      })
    }
  }
  return (
    <section className={styles.test}>
      <h1 className={styles.test_title}>Calificador: {test.name}</h1>
      <form className={styles.test_form} onSubmit={handleSubmit}>
        {test.inputs && test.inputs.map((input, i) => {
          const { label, type, name, error } = input
          return <Input key={input.name} inputProps={{ label, type, name, value: dynamicInputs[i], handleChange: (e) => handleInputChange({ event: e, index: i, name, error }), options: input?.options }} />
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
