import { NavLink as RouterNavLink } from 'react-router-dom'
import styles from './NavLink.module.scss'

export const NavLink = ({ to, children, props }) => {
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) => {
        return isActive ? styles.active : styles.link
      }}
      to={to}
    >{children}
    </RouterNavLink>
  )
}
