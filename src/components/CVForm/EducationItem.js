import React from "react";
import LabeledInput from "../utils/LabeledInput";
import Button from "../utils/Button";

function EducationItem(props) {
  const { educationData, onChange, onRemove } = props;
  return (
    <div className="education-item">
      <LabeledInput
        label="Institución"
        name="universityName"
        onChange={(e) => onChange(e, educationData.id)}
        placeholder="Universidad de Buenos Aires"
        value={educationData.universityName}
      />
      <LabeledInput
        label="Ciudad"
        name="city"
        onChange={(e) => onChange(e, educationData.id)}
        placeholder="CABA"
        value={educationData.city}
      />
      <LabeledInput
        label="Carrera"
        name="degree"
        onChange={(e) => onChange(e, educationData.id)}
        placeholder="Ingeniería Informática"
        value={educationData.degree}
      />
      <LabeledInput
        label="Desde"
        name="from"
        onChange={(e) => onChange(e, educationData.id)}
        placeholder="02/02/2002"
        value={educationData.from}
      />
      <LabeledInput
        label="Hasta"
        name="to"
        onChange={(e) => onChange(e, educationData.id)}
        placeholder="Actualidad"
        value={educationData.to}
      />
      <Button content="Eliminar" onClick={() => onRemove(educationData.id)} />
    </div>
  );
}

export default EducationItem;
