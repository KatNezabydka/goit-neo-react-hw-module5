import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'

const Navigation = () => {
  const getActiveClass = ({ isActive }) => {
    return isActive ? css.active : ''
  }
  return (
    <nav className={css.nav}>
      <NavLink className={getActiveClass} to='/'>
        Home
      </NavLink>
      <NavLink className={getActiveClass} to='/movies'>
        Movies
      </NavLink>
    </nav>
  )
}

export default Navigation
