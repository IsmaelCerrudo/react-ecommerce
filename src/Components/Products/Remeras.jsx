import { useState, useEffect } from "react";
function Remeras() {
  const [data, setData] = useState([]);
  const [remeras, setRemeras] = useState([]);
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
   console.log(data)
  }, []);
  <>
    <div>
      {remeras.map((el, i) => {
        return (
          <div key={i}>
            <div>{el.name}</div>
            <div>{el.desc}</div>
          </div>
        );
      })}
    </div>
  </>;
}

export default Remeras;
