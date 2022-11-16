import React from "react";
import Header from "./Header/Header";
import '../../Styles/index.css'

function Home() {
  return (
    <>
      <div className="cards-container">
        <Header texto={'2X1 Remeras'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus, velit aperiam volupt'}/>
        <Header texto={'2X1 Pantalones'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus, velit aperiam '}/>
        <Header texto={'2X1 Calzas'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus, velit ap'}/>
      </div>
    </>
  );
}
export default Home;
