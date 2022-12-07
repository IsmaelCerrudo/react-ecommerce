import { useContext, useEffect } from "react";
import { productsContext } from "../prodctosContext/productoContext";
import "../../Styles/index.css";

const Carrito = () => {
  const { carrito, setCarrito, contSuma, setContSuma, data } =
    useContext(productsContext);
  const handleSum = (data) => {

  };

  return (
    <>
      <div className="productContainer">
        {carrito.map((el, i) => {
          let img = require("../../img/" + el.img);
          return (
            <div className="product" key={i}>
              <div key={i}>
                <img src={img} className="product_img" alt="" />
                <div className="product_text">{el.name}</div>
                <button
                  className="carrito_btn"
                  onClick={() => {
                    handleSum(data);
                  }}
                >
                  +
                </button>
                <button className="carrito_btn" onClick={() => {}}>
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Carrito;
