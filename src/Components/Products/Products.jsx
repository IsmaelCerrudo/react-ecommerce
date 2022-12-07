import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../Styles/index.css";
import remera from "../../img/remera2.jpg";
import { productsContext } from "../prodctosContext/productoContext";
function Products() {
  const { carrito, setCarrito, data, setData } = useContext(productsContext);
  const getData = async () => {
    const response = await fetch(`data.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "aplication/json",
      },
    });
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const agregarAlCarrito = (producto) => {
    let existe = carrito.some((el) => el.id === producto.id);

    if (existe) {
      let _carrito = [...carrito];
      let index = _carrito.findIndex((i) => i.id === producto.id);
      _carrito[index].cantidad++;
      setCarrito(_carrito);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      return;
    }
    // producto.cantidad = 1;
    setCarrito((prev) => [producto, ...prev]);
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };
  useEffect(() => {
    console.log(carrito.cantidad);
  }, [carrito]);
  return (
    <>
      <div className="productContainer">
        {data.map((el, i) => {
          return (
            <div className="product" key={i}>
              <Link to={`/${el.id}`}>
                <div key={i}>
                  <img src={remera} className="product_img" alt="" />
                  <div className="product_text">{el.name}</div>
                </div>
              </Link>
              <button
                onClick={() => {
                  agregarAlCarrito(el);
                }}
                className={`btn`}
                id={`btn-agregar${el.id}`}
              >
                Agregar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
