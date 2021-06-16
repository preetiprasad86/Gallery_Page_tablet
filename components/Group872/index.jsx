import React from "react";
import FacebookAppSymbol from "../FacebookAppSymbol";
import Twitter from "../Twitter";
import "./Group872.css";

function Group872(props) {
  const { overlapGroup, vector2, facebookAppSymbolProps, twitterProps } = props;

  return (
    <div className="group-87">
      <FacebookAppSymbol src={facebookAppSymbolProps.src} />
      <div className="instagram">
        <div className="overlap-group1-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img
            className="vector-8"
            src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-155@2x.svg"
          />
          <img className="vector-9" src={vector2} />
        </div>
      </div>
      <Twitter src={twitterProps.src} />
    </div>
  );
}

export default Group872;
