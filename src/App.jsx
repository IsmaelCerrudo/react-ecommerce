import Home from "./Components/home/Home";
import Navbar from "./Components/home/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Remeras from "./Components/Products/Remeras";
import { Routes, Route } from "react-router-dom";
import "./Styles/index.css";
export function App() {
  return (
    <div className=" contenedor">
      <Navbar />

      <Routes path="/">
        <Route path="/home" element={<Home />} />
        <Route path="/catalogo" element={<Products />} />
        <Route path=":remeras" element={<Remeras />} />
      </Routes>
      {/* <Texto tittle ={titulos}/> */}
    </div>
  );
}
