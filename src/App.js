import logo from "./logo.svg";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import "./Styles/navbar.css";

export function App() {
  return (
    <div className="container-fluid contenedor">
      <Navbar logo={logo} />
      <Header/>
    </div>
  );
}
