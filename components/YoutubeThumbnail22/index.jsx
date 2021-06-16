import React from "react";
import "./YoutubeThumbnail22.css";

function YoutubeThumbnail22(props) {
  const { youtubeThumbnail, overlapGroup1, className } = props;

  return (
    <div className={`youtube-thumbnail ${className || ""}`} style={{ backgroundImage: `url(${youtubeThumbnail})` }}>
      <div className="ant-designplay-circle-outlined-1">
        <div className="overlap-group1-2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
          <img
            className="vector-4"
            src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-162@2x.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default YoutubeThumbnail22;
