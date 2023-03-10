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
      label: 'BDI-2',
      url: '/bdi-2'
    },
    {
      label: 'SCL-90-R de L. Derogatis',
      url: '/scl-90-r'
    },
    {
      lable: 'Escala de ansiedad de Hamilton',
      url: '/escala-ansiedad-hamilton'
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
      <button className={styles.header_menu} onClick={toggleMenu}>
        <span className={`${isMenuOpen ? styles.header_menu_hamburger_navOpen : ''} ${styles.header_menu_hamburger}`} />
      </button>
    </header>
  )
}
