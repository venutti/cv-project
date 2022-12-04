import React from "react";
import PersonalPreview from "./PersonalPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";

class CVPreview extends React.Component {
  render() {
    const { personalData, experienceData, educationData } = this.props;
    return (
      <section className="cv-preview layout">
        <PersonalPreview personalData={personalData}></PersonalPreview>
        <EducationPreview educationData={educationData}></EducationPreview>
        <ExperiencePreview experienceData={experienceData}></ExperiencePreview>
      </section>
    );
  }
}

export default CVPreview;
