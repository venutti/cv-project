import React from "react";
import Button from "../utils/Button";
import EducationItem from "./EducationItem";

function EducationForm(props) {
  const { educationData, onChange, onRemove, onAdd } = props;

  const renderEducationItems = (educationData, onChange, onRemove) => {
    return educationData.map((education) => (
      <EducationItem
        key={education.id}
        educationData={education}
        onChange={onChange}
        onRemove={onRemove}
      />
    ));
  };

  return (
    <>
      <h2>Educación</h2>
      {renderEducationItems(educationData, onChange, onRemove)}
      <Button type="custom" content="Añadir" onClick={() => onAdd()} />
    </>
  );
}

export default EducationForm;
