import { useState } from "react";
function Header({ texto, desc }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={toggle ? "opacidad" : "card"} onClick={handleToggle}>
      <h2
        className={toggle ? "active" : "card-text"}
      >
        {texto}
      </h2>
      {toggle && <p className="card-desc">{desc}</p>}
    </div>
  );
}

export default Header;
