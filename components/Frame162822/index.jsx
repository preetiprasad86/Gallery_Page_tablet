import React from "react";
import YoutubeCard22 from "../YoutubeCard22";
import "./Frame162822.css";

function Frame162822(props) {
  const { className, youtubeCard2Props, youtubeCard22Props } = props;

  return (
    <div className={`frame-1628 ${className || ""}`}>
      <YoutubeCard22
        text171={youtubeCard2Props.text171}
        address={youtubeCard2Props.address}
        youtubeThumbnail2Props={youtubeCard2Props.youtubeThumbnail2Props}
      />
      <YoutubeCard22
        text171={youtubeCard22Props.text171}
        address={youtubeCard22Props.address}
        className={youtubeCard22Props.className}
        youtubeThumbnail2Props={youtubeCard22Props.youtubeThumbnail2Props}
      />
    </div>
  );
}

export default Frame162822;
