import styles from './Paginator.module.scss'

export const Paginator = ({ currentPage, setCurrentPage, totalPages, elementsPerPage, className }) => {
  const currentTotalPages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  )

  const handleChangePage = (page) => {
    setCurrentPage((prev) => ({ ...prev, page }))
  }

  return (
    <div className={`${styles.paginator} ${className ?? ''}`}>
      {currentTotalPages.length && currentTotalPages.map((page, i) => {
        return (
          <button
            key={i}
            className={`${styles.paginator_button} ${currentPage === page ? styles.paginator_button__active : null}`}
            onClick={() => handleChangePage(page)}
            disabled={currentPage === page}
          >{page}
          </button>
        )
      })}
    </div>
  )
}
