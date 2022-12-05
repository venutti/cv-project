import React from "react";

function EducationItemPreview(props) {
  const { universityName, city, degree, from, to } = props.educationData;
  return (
    <div className="item-preview">
      <h4>
        {degree} / <span>{universityName}</span>
      </h4>
      <p>{city}</p>
      <p>
        Desde {from} hasta {to}
      </p>
    </div>
  );
}

export default EducationItemPreview;
