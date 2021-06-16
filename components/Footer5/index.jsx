import React from "react";
import Group872 from "../Group872";
import "./Footer5.css";

function Footer5(props) {
  const {
    group85,
    place,
    overlapGroup,
    vector2,
    phone,
    overlapGroup1,
    vector3,
    text15,
    text14,
    contactWebuildCom,
    quickLinks,
    aboutUs,
    projects,
    gallery,
    knowledgeTransfer,
    blogs,
    faqs,
    group872Props,
  } = props;

  return (
    <div className="footer">
      <div className="flex-row-1">
        <img
          className="vector-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-148@2x.svg"
        />
        <img className="group-85-1" src={group85} />
        <Group872
          overlapGroup={group872Props.overlapGroup}
          vector2={group872Props.vector2}
          facebookAppSymbolProps={group872Props.facebookAppSymbolProps}
          twitterProps={group872Props.twitterProps}
        />
      </div>
      <div className="flex-row-2">
        <div className="group-32">
          <div className="place valign-text-middle typographyheadlineh5-extrabold-20">{place}</div>
          <div className="flex-row-3">
            <div className="flex-col">
              <div className="map-pin-1">
                <div className="overlap-group1-3" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <img className="vector-6" src={vector2} />
                </div>
              </div>
              <div className="phone" style={{ backgroundImage: `url(${phone})` }}></div>
              <div className="mail">
                <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup1})` }}>
                  <img className="vector-7" src={vector3} />
                </div>
              </div>
            </div>
            <div className="flex-col-1">
              <p className="text-12 typography-body-smalltext-14-regular">{text15}</p>
              <div className="flex-col-item valign-text-middle typography-body-smalltext-14-regular">{text14}</div>
              <div className="flex-col-item valign-text-middle typography-body-smalltext-14-regular">
                {contactWebuildCom}
              </div>
            </div>
          </div>
        </div>
        <div className="group-147">
          <div className="quick-links valign-text-middle typographyheadlineh5-extrabold-20">{quickLinks}</div>
          <div className="flex-row-4">
            <div className="about-us valign-text-middle typographybody16-regular">{aboutUs}</div>
            <div className="projects valign-text-middle typographybody16-regular">{projects}</div>
          </div>
          <div className="flex-row">
            <div className="gallery valign-text-middle typographybody16-regular">{gallery}</div>
            <div className="knowledge-transfer valign-text-middle typographybody16-regular">{knowledgeTransfer}</div>
          </div>
          <div className="flex-row">
            <div className="blogs valign-text-middle typographybody16-regular">{blogs}</div>
            <div className="fa-qs valign-text-middle typographybody16-regular">{faqs}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer5;
