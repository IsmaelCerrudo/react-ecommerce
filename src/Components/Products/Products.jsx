import { useState, useEffect } from "react";
import '../../Styles/index.css'
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
  return <div className="productContainer">{data.map((el, i) => {
    console.log(el)
    return(
        <div className="product" key={i} >
            <img src={el.img} alt="" />
            <div>{el.name}</div>

        </div>
    )
  })}</div>;
}

export default Products;
