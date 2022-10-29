import "../../Styles/navbar.css";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";

export function Navbar({ logo }) {
  return (
    <nav className="navbarr d-flex justify-content-between">
      <div className="d-inline-flex m-auto" id="">
        <a className="nav-link" href="#">
          Inicio
        </a>
        <a className="nav-link" href="#">
          Produtos
        </a>
        <a className="nav-link" href="#">
          Local
        </a>
        <a className="nav-link" href="#">
          Contacto
        </a>
      </div>
      <img src={logo} alt="logo" className="logo m-auto" />
      <div className="d-inline-flex m-auto social-list">
        <FiInstagram />
        <FiFacebook />
        <ImWhatsapp />
      </div>
    </nav>
  );
}
