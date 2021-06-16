import React from "react";
import Frame144 from "../Frame144";
import AntDesignplayCircleOutlined22 from "../AntDesignplayCircleOutlined22";
import Frame162822 from "../Frame162822";
import Button22 from "../Button22";
import Footer5 from "../Footer5";
import "./Frame1603.css";

function Frame1603(props) {
  const {
    title,
    overlapGroup,
    latestVideos,
    text1,
    address,
    text2,
    frame144Props,
    antDesignplayCircleOutlined22Props,
    frame162822Props,
    frame1628222Props,
    frame1628223Props,
    frame1628224Props,
    button22Props,
    footer5Props,
  } = props;

  return (
    <div className="frame-1603">
      <Frame144 group86Props={frame144Props.group86Props} iconMenuProps={frame144Props.iconMenuProps} />
      <h1 className="title valign-text-middle typographyheadlineh4-extrabold-24">{title}</h1>
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="rectangle-78"></div>
        <div className="frame-1626">
          <div className="latest-videos valign-text-middle typographybodysmall-12-regular">{latestVideos}</div>
          <div className="text-1 valign-text-middle typographyheadlineh4-extrabold-24">{text1}</div>
          <p className="address valign-text-middle typography-body-smalltext-14-regular">{address}</p>
        </div>
        <AntDesignplayCircleOutlined22 overlapGroup1={antDesignplayCircleOutlined22Props.overlapGroup1} />
      </div>
      <p className="text-2 typography-body-smalltext-14-regular">{text2}</p>
      <div className="frame-1627">
        <Frame162822
          youtubeCard2Props={frame162822Props.youtubeCard2Props}
          youtubeCard22Props={frame162822Props.youtubeCard22Props}
        />
        <Frame162822
          className={frame1628222Props.className}
          youtubeCard2Props={frame1628222Props.youtubeCard2Props}
          youtubeCard22Props={frame1628222Props.youtubeCard22Props}
        />
        <Frame162822
          className={frame1628223Props.className}
          youtubeCard2Props={frame1628223Props.youtubeCard2Props}
          youtubeCard22Props={frame1628223Props.youtubeCard22Props}
        />
        <Frame162822
          className={frame1628224Props.className}
          youtubeCard2Props={frame1628224Props.youtubeCard2Props}
          youtubeCard22Props={frame1628224Props.youtubeCard22Props}
        />
        <Button22>{button22Props.children}</Button22>
      </div>
      <Footer5 {...footer5Props} />
    </div>
  );
}

export default Frame1603;
