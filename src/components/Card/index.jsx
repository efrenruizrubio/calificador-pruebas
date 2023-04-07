export const Card = ({ elements, className, id }) => {
  console.log(id)
  return (
    <div className={className}>
      {elements.map((element) => {
        return (
          <p key={id}>{element.name}{element.value}</p>
        )
      })}
    </div>
  )
}
