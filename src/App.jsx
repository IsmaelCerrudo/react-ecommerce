import Home from "./Components/home/Home";
import Navbar from "./Components/home/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Remeras from "./Components/Products/Remeras";
import Carrito from "./Components/Carrito/Carrito";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { productsContext } from "./Components/prodctosContext/productoContext";
import "./Styles/index.css";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export function App() {
  const [carrito, setCarrito] = useState(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  const [contSuma, setContSuma] = useState(0);
  const [data, setData] = useState([]);

  let contextValue = {
    carrito: carrito,
    setCarrito: setCarrito,
    contSuma: contSuma,
    setContSuma: setContSuma,
    data: data,
    setData: setData,
  };
  const firebaseConfig = {
    apiKey: "AIzaSyDLnjY0i0AKX2uYOdwu2Ov5SZoLzKei5tM",
    authDomain: "react-ecommerce-369418.firebaseapp.com",
    projectId: "react-ecommerce-369418",
    storageBucket: "react-ecommerce-369418.appspot.com",
    messagingSenderId: "146386952687",
    appId: "1:146386952687:web:0248663a978a713f68561a",
    measurementId: "G-DV6P5BP0Y3",
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
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
