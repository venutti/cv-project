import React from "react";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

class CVForm extends React.Component {
  render() {
    const {
      personalData,
      educationData,
      experienceData,
      onChangePersonal,
      onChangeEducation,
      onRemoveEducation,
      onAddEducation,
      onChangeExperience,
      onRemoveExperience,
      onAddExperience,
    } = this.props;
    return (
      <section className="cv-form layout">
        <PersonalForm
          personalData={personalData}
          onChange={onChangePersonal}
        ></PersonalForm>
        <EducationForm
          educationData={educationData}
          onChange={onChangeEducation}
          onRemove={onRemoveEducation}
          onAdd={onAddEducation}
        ></EducationForm>
        <ExperienceForm
          experienceData={experienceData}
          onChange={onChangeExperience}
          onRemove={onRemoveExperience}
          onAdd={onAddExperience}
        ></ExperienceForm>
      </section>
    );
  }
}

export default CVForm;
