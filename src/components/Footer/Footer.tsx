import React from "react";
import ReactDOM from "react-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <p className="Footer-item">Danish Khan</p>
      <p className="Footer-item">React Application v1.0.0</p>
      <p className="Footer-item">{Date()}</p>
    </div>
  );
};

export default Footer;
