import { useContext } from "react";
import { productsContext } from "../prodctosContext/productoContext";
import { Link } from "react-router-dom";
import "../../Styles/index.css";

const Carrito = () => {
  const { carrito } = useContext(productsContext);

  return (
    <>
      <div className="productContainer">
        {carrito.map((el, i) => {
          let img = require("../../img/" + el.img);
          return (
            <div className="product" key={i}>
              <Link to={`/${el.id}`}>
                <div key={i}>
                  <img src={img} className="product_img" alt="" />
                  <div className="product_text">{el.name}</div>
                  <div className="product_text">cantidad: {el.cantidad}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Carrito;
