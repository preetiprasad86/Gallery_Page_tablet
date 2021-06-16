import React from "react";
import Group86 from "../Group86";
import IconMenu from "../IconMenu";
import "./Frame144.css";

function Frame144(props) {
  const { group86Props, iconMenuProps } = props;

  return (
    <div className="frame-144">
      <Group86 group85={group86Props.group85} whiteProps={group86Props.whiteProps} />
      <IconMenu vector2={iconMenuProps.vector2} vector3={iconMenuProps.vector3} />
    </div>
  );
}

export default Frame144;
