import React from "react";
import LabeledInput from "../utils/LabeledInput";
import Button from "../utils/Button";

class ExperienceItem extends React.Component {
  render() {
    const { experienceData, onChange, onRemove } = this.props;
    return (
      <div className="experience-item">
        <LabeledInput
          label="Puesto"
          name="position"
          onChange={(e) => onChange(e, experienceData.id)}
          placeholder="Tester QA"
          value={experienceData.position}
        />
        <LabeledInput
          label="Empresa"
          name="company"
          onChange={(e) => onChange(e, experienceData.id)}
          placeholder="Coca Cola Enterprise"
          value={experienceData.company}
        />
        <LabeledInput
          label="Ciudad"
          name="city"
          onChange={(e) => onChange(e, experienceData.id)}
          placeholder="La Plata"
          value={experienceData.city}
        />
        <LabeledInput
          label="Desde"
          name="from"
          onChange={(e) => onChange(e, experienceData.id)}
          placeholder="02/02/2002"
          value={experienceData.from}
        />
        <LabeledInput
          label="Desde"
          name="to"
          onChange={(e) => onChange(e, experienceData.id)}
          placeholder="Actualidad"
          value={experienceData.to}
        />
        <Button
          content="Eliminar"
          onClick={() => onRemove(experienceData.id)}
        />
      </div>
    );
  }
}

export default ExperienceItem;
