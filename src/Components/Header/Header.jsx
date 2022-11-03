import "../../Styles/navbar.css";
export function Header() {
  return (
    <>
      <div className="decoration"></div>
      <div id="tittle-arrays" className="decoration_2">
      </div>
    </>
  );
}

export function Texto({tittle}) {
  return (
    <div className="array-container">
      {tittle.map((titulo, i) => {
          return (
            <div key={i} className="title-container">
              <h3 >{titulo}</h3>
            </div>
          );
        })}
    </div>
  )
}

