import { useState } from 'react'
import { NavContent } from '../NavContent/index'
import styles from './Header.module.scss'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = [
    {
      label: 'Inicio',
      url: '/'
    },
    {
      label: 'Tests',
      url: '/tests'
    },
    {
      label: 'Resultados',
      url: '/resultados'
    }
  ]

  const toggleMenu = () => {
    setIsMenuOpen((prev) =>
      !prev
    )
  }

  return (
    <header className={styles.header}>
      <img
        src='/assets/icons/logo.png'
        alt='Logo del Centro Universitario de Ciencias Económico Administrativas'
        className={styles.header_logo}
        width={100}
        height='auto'
      />
      <div className={styles.header_nav}>
        <NavContent links={links} />
      </div>
      <aside className={`${isMenuOpen ? styles.header_aside_navOpen : ''}  ${styles.header_aside}`}>
        <button type='button' className={styles.header_aside_button} onClick={toggleMenu} />
        <div className={styles.header_aside_nav}>
          <NavContent links={links} toggleMenu={toggleMenu} />
        </div>
      </aside>
      <button className={styles.header_menu} onClick={toggleMenu} type='button' aria-label={isMenuOpen ? 'Abrir Menú' : 'Cerrar Menú'}>
        <span className={`${isMenuOpen ? styles.header_menu_hamburger_navOpen : ''} ${styles.header_menu_hamburger}`} />
      </button>
    </header>
  )
}
