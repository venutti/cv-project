import React, { useState } from "react";
import uniqid from "uniqid";
import CVPreview from "./CVPreview/CVPreview";
import CVForm from "./CVForm/CVForm";
import { cvExample } from "./assets/cvSamples";

function Main() {
  const [personalData, setPersonalData] = useState(cvExample.personalData);
  const [experienceData, setExperienceData] = useState(
    cvExample.experienceData
  );
  const [educationData, setEducationData] = useState(cvExample.educationData);

  const handleChangePersonalData = (event) => {
    const { name, value } = event.target;
    const newPersonalData = { ...personalData, [name]: value };
    setPersonalData(newPersonalData);
  };

  const handleChangeEducationData = (event, id) => {
    const { name, value } = event.target;
    const newEducationData = educationData.map((education) => {
      if (education.id === id) {
        return { ...education, [name]: value };
      } else {
        return education;
      }
    });
    setEducationData(newEducationData);
  };

  const handleRemoveEducationData = (id) => {
    const newEducationData = educationData.filter(
      (education) => education.id !== id
    );
    setEducationData(newEducationData);
  };

  const handleAddEducationData = () => {
    const newEducationData = [
      ...educationData,
      {
        id: uniqid(),
        universityName: "",
        city: "",
        degree: "",
        from: "",
        to: "",
      },
    ];
    setEducationData(newEducationData);
  };

  const handleChangeExperienceData = (event, id) => {
    const { name, value } = event.target;
    const newExperienceData = experienceData.map((experience) => {
      if (experience.id === id) {
        return { ...experience, [name]: value };
      } else {
        return experience;
      }
    });
    setExperienceData(newExperienceData);
  };

  const handleRemoveExperienceData = (id) => {
    const newExperienceData = experienceData.filter(
      (experience) => experience.id !== id
    );
    setExperienceData(newExperienceData);
  };

  const handleAddExperienceData = () => {
    const newExperienceData = [
      ...experienceData,
      {
        id: uniqid(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
    ];
    setExperienceData(newExperienceData);
  };

  return (
    <>
      <CVForm
        personalData={personalData}
        educationData={educationData}
        experienceData={experienceData}
        onChangePersonal={handleChangePersonalData}
        onChangeEducation={handleChangeEducationData}
        onRemoveEducation={handleRemoveEducationData}
        onAddEducation={handleAddEducationData}
        onChangeExperience={handleChangeExperienceData}
        onRemoveExperience={handleRemoveExperienceData}
        onAddExperience={handleAddExperienceData}
      ></CVForm>
      <CVPreview
        personalData={personalData}
        educationData={educationData}
        experienceData={experienceData}
      ></CVPreview>
    </>
  );
}

export default Main;
