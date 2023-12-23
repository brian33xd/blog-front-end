import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from '../../assets/five.jpg'
import { useState } from "react";
export const Nav = () => {
  const navegar = useNavigate();
  const [Active, setActive] = useState();

  const lookingfor = (e) => {
    e.preventDefault()

    let mySearch = e.target.search.value

    navegar('buscar/' + mySearch, { replace: true })
  }

  return (
    <nav className={Active ? 'nav show-menu' : 'nav'}>
      <Link to='/Inicio' className="nav__logo">
        <img src={logo} alt="" className="nav__logo-img" />
        <p className="nav__logo-title">ZT-Anime</p>
      </Link>




      <div className='nav-close-open' onClick={() => setActive(!Active)}></div>
      <ul className="nav__list">
        <li><NavLink to="/inicio" className={({ isActive }) => isActive ? "nav__link-active nav__link" : "nav__link"}>Inicio</NavLink></li>
        <li><NavLink to='articulos/' className={({ isActive }) => isActive ? "nav__link-active nav__link" : "nav__link"}>Articulos</NavLink></li>
        <li><NavLink to="/sobre-mi" className={({ isActive }) => isActive ? "nav__link-active nav__link" : "nav__link"}>Sobre mi</NavLink></li>
        <li><NavLink to="/Admin" className={({ isActive }) => isActive ? "nav__link-active nav__link" : "nav__link"}>Admin</NavLink></li>
        <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "nav__link-active nav__link" : "nav__link"}>Contacto</NavLink></li>
      </ul>

      <aside className="nav__search">
        <div className="search__container">
          <form onSubmit={lookingfor}>
            <input type="text" className="search__field" placeholder="Buscar..." name="search" />
          </form>
        </div>

        <ul className="nav__categories">
          <NavLink to='articulos/' className={({ isActive }) => isActive ? "nav__choose-active nav__choose" : "nav__choose "}>All</NavLink>
          <NavLink to='buscar/Juegos' className={({ isActive }) => isActive ? "nav__choose-active nav__choose" : "nav__choose"}>Juegos</NavLink>
          <NavLink to='buscar/Anime' className={({ isActive }) => isActive ? "nav__choose-active nav__choose" : "nav__choose"}>Anime</NavLink>
          <NavLink to='buscar/Manga' className={({ isActive }) => isActive ? "nav__choose-active nav__choose" : "nav__choose"}>Manga</NavLink>
        </ul>
      </aside>
    </nav>
  )
}