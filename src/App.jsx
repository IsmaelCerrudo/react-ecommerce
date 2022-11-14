import Home from "./Components/home/Home";
import Navbar from "./Components/home/Navbar/Navbar";
import Products from "./Components/Products/Products";
import { Routes, Route } from "react-router-dom";
import "./Styles/index.css";
export function App() {
  return (
    <div className=" contenedor">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalogo" element={<Products/>}/>
        {/* <Texto tittle ={titulos}/> */}
      </Routes>
    </div>
  );
}
