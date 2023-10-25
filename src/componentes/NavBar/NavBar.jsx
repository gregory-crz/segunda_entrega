import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logo' src="./img/logo.png" alt="logo" />
        <h1 className='titulo' >Super Cool</h1>
      </Link>
 
      <nav>
        <ul>
          <li>
            <NavLink  className="categoriaProductos" to="categoria/2">Bebidas</NavLink>
          </li>

          <li>
            <NavLink  className="categoriaProductos" to="categoria/3">Licores</NavLink>
          </li>
          
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar