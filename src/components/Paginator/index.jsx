import styles from './Paginator.module.scss'

export const Paginator = ({ currentPage, setCurrentPage, elementsPerPage, totalElements }) => {
  const totalPages = (totalElements && elementsPerPage ? Math.ceil(totalElements / elementsPerPage) : 0)
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const handlePageChange = (e) => {
    setCurrentPage(Number(e.target.value))
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.paginator}>
      {pages && pages.length > 0 && pages.map((page) => {
        return (
          <button
            key={page}
            type='button'
            className={`${styles.paginator_button} ${currentPage === page ? styles.paginator_button_active : ''}`}
            onClick={handlePageChange}
            value={page}
          >{page}
          </button>
        )
      })}
    </div>
  )
}
