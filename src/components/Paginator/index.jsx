import styles from './Paginator.module.scss'

export const Paginator = ({ currentPage, setCurrentPage, elementsPerPage, totalElements }) => {
  // const [currentPage, setCurrentPage] = useState(totalElements > 0 ? 1 : 0)
  const totalPages = (totalElements && elementsPerPage ? Math.ceil(totalElements / elementsPerPage) : 0)
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const handlePageChange = (e) => {
    setCurrentPage(e.target.value)
    window.scrollTo(0, 0)
  }

  console.log('children')
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
