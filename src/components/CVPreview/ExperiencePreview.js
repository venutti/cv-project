import React from "react";
import ExperienceItemPreview from "./ExperienceItemPreview";

function ExperiencePreview(props) {
  const renderExperienceItemPreview = (experienceData) => {
    return experienceData.map((experience) => (
      <ExperienceItemPreview key={experience.id} experienceData={experience} />
    ));
  };

  return (
    <div className="experience-info">
      <h3 className="preview-subtitle">Experiencia</h3>
      {renderExperienceItemPreview(props.experienceData)}
    </div>
  );
}
export default ExperiencePreview;
