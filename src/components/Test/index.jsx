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

  const handleChange = (event, index, section) => {
    setAnswers((prev) => {
      const { name, value } = event.target
      const oldElements = structuredClone(prev)
      const element = oldElements.findIndex((el) => el.index === index)
      if (oldElements[element]) {
        oldElements.splice(element, 1)
      }
      const elements = [
        ...oldElements,
        {
          option: name.split(' -')[0],
          value: Number(value),
          index,
          ...(section && { section })
        }
      ]
      if (elements.length === test.questions.length) setCanSubmit(true)
      else setCanSubmit(false)
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
    if (id === 4) {
      const status = qualificatorsService.measuringSexAddiction({ score })
      newResult.status = status
    }

    const aux = structuredClone(newResult)
    const payload = newResult
    payload.inputs = aux.inputs.filter((i) => i.name !== '' || i.value !== '')

    resultsService
      .createResult(payload)
      .then((res) => {
        // console.log(res)
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
          const { name, error } = input
          return (
            <Input key={input.name} inputProps={{ ...input, value: dynamicInputs[i], handleChange: (e) => handleInputChange({ event: e, index: i, name, error }) }}>
              {input.specialText ? <p className={styles.test_input_special}><strong>{input.specialText}</strong></p> : null}
            </Input>
          )
        }
        )}
        {test.questions &&
          test.questions.map((question) => {
            return (
              <div
                className={styles.test_form_question}
                key={`${question.question}-${question.index}`}
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
                          name={`${question.question} -${question.index}`}
                          id={`${question.question}-${answer.option}-${question.index}`}
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
                          htmlFor={`${question.question}-${answer.option}-${question.index}`}
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
        <button className={styles.test_form_submit} disabled={!canSubmit} type='submit'>
          Calificar prueba
        </button>
      </form>
    </section>
  )
}
