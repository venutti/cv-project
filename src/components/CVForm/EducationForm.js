import React from "react";
import Button from "../utils/Button";
import EducationItem from "./EducationItem";

class EducationForm extends React.Component {
  renderEducationItems(educationData, onChange, onRemove) {
    return educationData.map((education) => (
      <EducationItem
        key={education.id}
        educationData={education}
        onChange={onChange}
        onRemove={onRemove}
      />
    ));
  }
  render() {
    const { educationData, onChange, onRemove, onAdd } = this.props;
    return (
      <>
        <h2>Educación</h2>
        {this.renderEducationItems(educationData, onChange, onRemove)}
        <Button type="custom" content="Añadir" onClick={() => onAdd()} />
      </>
    );
  }
}

export default EducationForm;
