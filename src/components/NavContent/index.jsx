import styles from './NavContent.module.scss'
import { Link } from 'react-router-dom'

export const NavContent = ({ links, toggleMenu }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {links && links.map((link) => {
          return (
            <li key={link.url} className={styles.nav_list_element}>
              <Link
                className={styles.nav_list_element_link}
                to={link.url}
                onClick={toggleMenu}
              >{link.label}
              </Link>
            </li>
          )
        }
        )}
      </ul>
    </nav>
  )
}
