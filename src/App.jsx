import logo from "./logo.svg";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header, Texto } from "./Components/Header/Header";
import "./Styles/navbar.css";
const titulos = ["Elegante", "Bello", "Fino"]
export function App() {
  return (
    <div className=" contenedor">
      <Navbar logo={logo} />
      <Header />
      <Texto tittle ={titulos}/>
    </div>
  );
}
