import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../Styles/index.css";
function Remeras() {
  const [data, setData] = useState([]);
  const [filtrado, setfiltrado] = useState([]);
  let { id } = useParams();

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
  useEffect(() => {
    const filtro = data.filter((el) => el.id === parseInt(id));
    setfiltrado(filtro);
  }, [data]);

  return (
    <>
      <div className="productContainer">
        {filtrado.map((el, i) => {
          let img = require("../../img/" + el.img);
          return (
            <div className="product" key={i}>
              <img src={img} className="product_img" alt="" />
              <div className="product_text">{el.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Remeras;
