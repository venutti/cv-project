import React from "react";
import Button from "../utils/Button";
import ExperienceItem from "./ExperienceItem";

function ExperienceForm(props) {
  const { experienceData, onChange, onRemove, onAdd } = props;

  const renderExperienceItems = (experienceData, onChange, onRemove) => {
    return experienceData.map((experience) => (
      <ExperienceItem
        key={experience.id}
        experienceData={experience}
        onChange={onChange}
        onRemove={onRemove}
      />
    ));
  };

  return (
    <>
      <h2>Experiencia</h2>
      {renderExperienceItems(experienceData, onChange, onRemove)}
      <Button type="custom" content="Añadir" onClick={() => onAdd()} />
    </>
  );
}

export default ExperienceForm;
