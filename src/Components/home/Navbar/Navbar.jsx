import "../../../Styles/index.css";
import CartWidget from "./CartWidget";
import logo from "../../../logo.svg";
import { TfiShoppingCart } from "react-icons/tfi";
import { RiHomeLine, RiShoppingBag2Line } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  let handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="menu">
        <Link className="link">
          <span className="link-icon">
            <RiHomeLine />
          </span>
          <span className="link-title">Inicio</span>
        </Link>

        <Link className="link">
          <span className="link-icon">
            <RiShoppingBag2Line />
          </span>
          <span className="link-title">Catalogo</span>
        </Link>
        <Link className="link">
            <span className="link-icon">
              <TfiShoppingCart />
            </span>
            <span className="link-title">Carrito</span>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
