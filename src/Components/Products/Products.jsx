import { useState, useEffect } from "react";
import {Link,} from 'react-router-dom'; 
import "../../Styles/index.css";
import remera from "../../img/remera2.jpg";
function Products() {
  const [data, setData] = useState([]);
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
  return (
    <>
      <div className="productContainer">
        {data.map((el, i) => {
          console.log(el);
          return (
            <Link key={i} to={`/${el.id}`}>
              <div className="product" key={i}>
                <img src={remera} className="product_img" alt="" />
                <div className="product_text">{el.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Products;
