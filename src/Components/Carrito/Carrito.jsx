import { useContext, useEffect } from "react";
import { productsContext } from "../prodctosContext/productoContext";
import "../../Styles/index.css";

const Carrito = () => {
  const { carrito, setCarrito, contSuma, setContSuma } =
    useContext(productsContext);
  const handleSum = () => {
    setContSuma(contSuma + 1);
    console.log(contSuma);
  };
  // useEffect(() => {
  //   let _carrito = [...carrito];
  //   let index = _carrito.findIndex((i) => i.id === carrito.id);
  //   _carrito[index].cantidad = contSuma;
  //   setCarrito(_carrito);
  //   console.log(carrito.cantidad);
  // }, [contSuma]);
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
                    handleSum();
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
