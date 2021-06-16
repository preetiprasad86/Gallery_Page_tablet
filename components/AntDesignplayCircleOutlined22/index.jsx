import React from "react";
import "./AntDesignplayCircleOutlined22.css";

function AntDesignplayCircleOutlined22(props) {
  const { overlapGroup1 } = props;

  return (
    <div className="ant-designplay-circle-outlined">
      <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
        <img
          className="vector-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-156@2x.svg"
        />
      </div>
    </div>
  );
}

export default AntDesignplayCircleOutlined22;
