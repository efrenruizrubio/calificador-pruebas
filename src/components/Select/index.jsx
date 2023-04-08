import styles from './Select.module.scss'

export const Select = ({ options, label, className, handleChange }) => {
  return (
    <div className={`${styles.select} ${className ?? ''}`}>
      <label htmlFor='option'>{label}</label>
      <select name='option' defaultValue={options[0]} onChange={(e) => handleChange(e)}>
        {options && options.map((option) => {
          return (
            <option key={option} value={option}>{option}</option>
          )
        })}
      </select>
    </div>
  )
}
