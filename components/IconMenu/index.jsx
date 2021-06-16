import React from "react";
import "./IconMenu.css";

function IconMenu(props) {
  const { vector2, vector3 } = props;

  return (
    <div className="icon-menu">
      <img
        className="vector-2"
        src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg"
      />
      <img className="vector-1" src={vector2} />
      <img className="vector-1" src={vector3} />
    </div>
  );
}

export default IconMenu;
