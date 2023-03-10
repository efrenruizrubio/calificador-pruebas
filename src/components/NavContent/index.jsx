import styles from './NavContent.module.scss'
import { NavLink } from '../NavLink/index'

export const NavContent = ({ links, toggleMenu }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {links && links.map((link) => {
          return (
            <li key={link.url} className={styles.nav_list_element}>
              <NavLink
                to={link.url}
                onClick={toggleMenu}
              >{link.label}
              </NavLink>
            </li>
          )
        }
        )}
      </ul>
    </nav>
  )
}
