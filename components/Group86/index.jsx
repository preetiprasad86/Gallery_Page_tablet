import React from "react";
import White from "../White";
import "./Group86.css";

function Group86(props) {
  const { group85, whiteProps } = props;

  return (
    <div className="group-86">
      <White src={whiteProps.src} />
      <img className="group-85" src={group85} />
    </div>
  );
}

export default Group86;
