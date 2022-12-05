import React from "react";
import PersonalPreview from "./PersonalPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";

function CVPreview(props) {
  const { personalData, experienceData, educationData } = props;
  return (
    <section className="cv-preview layout">
      <PersonalPreview personalData={personalData}></PersonalPreview>
      <EducationPreview educationData={educationData}></EducationPreview>
      <ExperiencePreview experienceData={experienceData}></ExperiencePreview>
    </section>
  );
}

export default CVPreview;
