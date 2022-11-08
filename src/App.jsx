import logo from "./logo.svg";
import  Navbar  from "./Components/Navbar/Navbar";
import  Header from "./Components/home/Header/Header";
import "./Styles/index.css";
const titulos = ["Elegante", "Bello", "Fino"]
export function App() {
  return (
    <div className=" contenedor">
      <Navbar logo={logo} />
      <Header />
      {/* <Texto tittle ={titulos}/> */}
    </div>
  );
}
