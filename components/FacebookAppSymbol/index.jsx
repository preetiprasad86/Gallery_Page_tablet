import React from "react";
import "./FacebookAppSymbol.css";

function FacebookAppSymbol(props) {
  const { src } = props;

  return (
    <div className="facebook-app-symbol">
      <img className="f-1" src={src} />
    </div>
  );
}

export default FacebookAppSymbol;
