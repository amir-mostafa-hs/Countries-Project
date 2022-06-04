import "./style.css";
import { useState } from "react";
const Header = () => {
  const [mode, setMode] = useState(true);
  return (
    <header className="page-header">
      <h3>Where in the world?</h3>
      <button onClick={() => setMode(!mode)} className="btn-mode">
        <i className={`bi bi-${mode ? "sun" : "moon"}-fill`}></i>
        {mode ? " Light" : " Dark"} Mode
      </button>
    </header>
  );
};

export default Header;
