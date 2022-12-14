import React from "react";

function ExperienceItemPreview(props) {
  const { position, company, city, from, to } = props.experienceData;
  return (
    <div className="item-preview">
      <h4>
        {position} / <span>{company}</span>
      </h4>
      <p>{city}</p>
      <p>
        Desde {from} hasta {to}
      </p>
    </div>
  );
}

export default ExperienceItemPreview;
