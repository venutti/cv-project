import React from "react";
import ExperienceItemPreview from "./ExperienceItemPreview";

class ExperiencePreview extends React.Component {
  renderExperienceItemPreview(experienceData) {
    return experienceData.map((experience) => (
      <ExperienceItemPreview key={experience.id} experienceData={experience} />
    ));
  }

  render() {
    return (
      <div className="experience-info">
        <h3 className="preview-subtitle">Experiencia</h3>
        {this.renderExperienceItemPreview(this.props.experienceData)}
      </div>
    );
  }
}

export default ExperiencePreview;
