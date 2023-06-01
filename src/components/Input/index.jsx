import styles from './Input.module.scss'

export const Input = ({ inputProps, index }) => {
  const { label, type, name, value, handleChange } = inputProps
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input type={type} name={name} id={name} value={value.value} onChange={(e) => handleChange(e, index)} onBlur={(e) => handleChange(e, index)} required />
      {value.error && <p className={styles.input_error}>{value.error}</p>}
    </div>
  )
}
