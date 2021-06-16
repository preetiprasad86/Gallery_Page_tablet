import React from "react";
import YoutubeThumbnail22 from "../YoutubeThumbnail22";
import "./YoutubeCard22.css";

function YoutubeCard22(props) {
  const { text171, address, className, youtubeThumbnail2Props } = props;

  return (
    <div className={`youtube-card ${className || ""}`}>
      <YoutubeThumbnail22
        youtubeThumbnail={youtubeThumbnail2Props.youtubeThumbnail}
        overlapGroup1={youtubeThumbnail2Props.overlapGroup1}
        className={youtubeThumbnail2Props.className}
      />
      <div className="group-162">
        <div className="overlap-group1-1">
          <div className="text valign-text-middle typographyheadlineh5-extrabold-20">{text171}</div>
          <p className="address-1 valign-text-middle typographybodysmall-12-regular">{address}</p>
        </div>
      </div>
    </div>
  );
}

export default YoutubeCard22;
