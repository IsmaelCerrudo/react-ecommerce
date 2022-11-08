import '../../Styles/index.css'
import CartWidget from './CartWidget'
import logo from '../../logo.svg'
function Navbar() {
  return (
    <>
    <nav className='navbar'>
    <img src={logo} alt="react.svg" className='logo' />
    <ul className='navbar__list'>
        <li className='navbar__list-element'>Inicio</li>
        <li className='navbar__list-element'>Productos</li>
    </ul>
    <div className='navbar-icons'>
        <CartWidget/>
    </div>
    </nav>

    </>
  )
}

export default Navbar