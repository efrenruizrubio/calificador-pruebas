import styles from './Card.module.scss'

export const Card = ({ elements, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {elements.map((element, i) => {
        return (
          <p key={i}>{element.name}{element.value}</p>
        )
      })}
    </div>
  )
}
