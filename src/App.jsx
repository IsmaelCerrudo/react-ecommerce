import Home from "./Components/home/Home";
import Navbar from "./Components/home/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Remeras from "./Components/Products/Remeras";
import Carrito from "./Components/Carrito/Carrito";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { productsContext } from "./Components/prodctosContext/productoContext";
import "./Styles/index.css";
import { useState } from "react";
export function App() {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  const [contSuma, setContSuma] = useState(0);

  let contextValue = {
    carrito: carrito,
    setCarrito: setCarrito,
    contSuma: contSuma,
    setContSuma: setContSuma,
  };
  return (
    <div className=" contenedor">
      <Navbar />
      <productsContext.Provider value={contextValue}>
        <Routes path="/">
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Products />} />
          <Route path=":id" element={<Remeras />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </productsContext.Provider>
      <Footer />

      {/* <Texto tittle ={titulos}/> */}
    </div>
  );
}
