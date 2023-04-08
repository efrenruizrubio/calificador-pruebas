import styles from './Paginator.module.scss'

export const Paginator = ({ currentPage, setCurrentPage, totalPages, elementsPerPage, className }) => {
  const currentTotalPages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  )

  const handleChangePage = (page) => {
    setCurrentPage({ page, limit: elementsPerPage })
  }
  return (
    <div className={`${styles.paginator} ${className}`}>
      {currentTotalPages.length && currentTotalPages.map((page, i) => {
        return (
          <button key={i} className={styles.paginator_button} onClick={() => handleChangePage(page)}>{page}</button>
        )
      })}
    </div>
  )
}
