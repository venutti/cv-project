import React from "react";
import EducationItemPreview from "./EducationItemPreview";

function EducationPreview(props) {
  const renderEducationItemPreview = (educationData) => {
    return educationData.map((education) => (
      <EducationItemPreview key={education.id} educationData={education} />
    ));
  };

  return (
    <div className="education-info">
      <h3 className="preview-subtitle">Educación</h3>
      {renderEducationItemPreview(props.educationData)}
    </div>
  );
}

export default EducationPreview;
