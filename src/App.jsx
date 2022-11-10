import Home from './Components/home/Home'
import {Routes,Route} from 'react-router-dom'
import "./Styles/index.css";
export function App() {
  return (
    <div className=" contenedor">
      <Routes>
        <Route path="" element={<Home/>}/>
      {/* <Texto tittle ={titulos}/> */}
      </Routes>
    </div>
  );
}
