/* eslint-disable indent */
import styles from './Input.module.scss'

export const Input = ({ inputProps, index, children }) => {
  const { label, type, name, value, handleChange, options = [], required } = inputProps
  return (
    <>
      {children}
      <div className={`${styles.input} ${type === 'radio' && options.length < 3 ? styles.input_flex : type === 'radio' && options.length > 3 ? styles.input_grid : type === 'checkbox' ? styles.input_checkbox : ''}`}>
        {type === 'select'
          ? (
            <>
              <label htmlFor={name}>{label}</label>
              <select name={name} id={name} value={value.value} onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} required={required}>
                <option value=''>Selecciona una opción</option>
                {options.map((option) => {
                  return <option key={option} value={option}>{option}</option>
                })}
              </select>
              {value.error && <p className={styles.input_error}>{value.error}</p>}
            </>
          )
          : type === 'radio'
            ? (
              <>
                <label>{label}</label>
                {options.map((option) => {
                  return (
                    <div key={option.option}>
                      <input type={type} name={name} id={`${name}-${option.value}`} value={option.value} onChange={(e) => handleChange(e, index)} required={required} />
                      <label htmlFor={`${name}-${option.value}`}>{option.option}</label>
                      {value.error && <p className={styles.input_error}>{value.error}</p>}
                    </div>

                  )
                })}
              </>
            )
            : (
              <>
                <label htmlFor={name}>{label}</label>
                <input className={type === 'checkbox' ? styles.input_checkbox_input : ''} type={type} name={name} id={name} value={value.value} onChange={(e) => handleChange(e, index)} onBlur={(e) => handleChange(e, index)} required={required} />
                {value.error && <p className={styles.input_error}>{value.error}</p>}
              </>
            )}
      </div>

    </>
  )
}
