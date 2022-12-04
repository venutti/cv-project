import React from "react";
import Button from "../utils/Button";
import ExperienceItem from "./ExperienceItem";

class ExperienceForm extends React.Component {
  renderExperienceItems(experienceData, onChange, onRemove) {
    return experienceData.map((experience) => (
      <ExperienceItem
        key={experience.id}
        experienceData={experience}
        onChange={onChange}
        onRemove={onRemove}
      />
    ));
  }
  render() {
    const { experienceData, onChange, onRemove, onAdd } = this.props;
    return (
      <>
        <h2>Experiencia</h2>
        {this.renderExperienceItems(experienceData, onChange, onRemove)}
        <Button type="custom" content="Añadir" onClick={() => onAdd()} />
      </>
    );
  }
}

export default ExperienceForm;
