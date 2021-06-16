import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x27322191TimelineData);
  }, []);

  return (
    <div className="x27322191 component component-wrapper not-ready">
      <div className="master-button-vjylxT">
        <div className="button-i2732219151-33HRPj valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x27322191TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x27322191",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button22;
