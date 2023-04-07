
export const Filter = ({ type, value, placeholder, className, handleChange }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={(e) => handleChange(e)}
    />
  )
}
