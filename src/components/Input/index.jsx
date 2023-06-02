import styles from './Input.module.scss'

export const Input = ({ inputProps, index }) => {
  const { label, type, name, value, handleChange, options = [] } = inputProps
  return (
    <div className={styles.input}>
      <label>{label}</label>
      {type !== 'select'
        ? (
          <>
            <input type={type} name={name} id={name} value={value.value} onChange={(e) => handleChange(e, index)} onBlur={(e) => handleChange(e, index)} required />
            {value.error && <p className={styles.input_error}>{value.error}</p>}
          </>
          )
        : (
          <>
            <select name={name} id={name} value={value.value} onChange={(e) => handleChange(e, index)} onBlur={(e) => handleChange(e, index)} required>
              <option value=''>Selecciona una opción</option>
              {options.map((option) => {
                return <option key={option} value={option}>{option}</option>
              })}
            </select>
          </>
          )}
    </div>
  )
}
