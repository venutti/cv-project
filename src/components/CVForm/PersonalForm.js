import React from "react";
import LabeledInput from "../utils/LabeledInput";

class PersonalForm extends React.Component {
  render() {
    const { personalData, onChange } = this.props;
    return (
      <>
        <h2>Datos Personales</h2>
        <LabeledInput
          label="Nombre"
          name="firstName"
          onChange={(e) => onChange(e)}
          placeholder="Godinez"
          value={personalData.firstName}
        />
        <LabeledInput
          label="Apellido"
          name="lastName"
          onChange={(e) => onChange(e)}
          placeholder="Guttierrez"
          value={personalData.lastName}
        />
        <LabeledInput
          label="Profesión"
          name="title"
          onChange={(e) => onChange(e)}
          placeholder="Dessarrollador Full Stack"
          value={personalData.title}
        />
        <LabeledInput
          label="Dirección"
          name="address"
          onChange={(e) => onChange(e)}
          placeholder="Calle falsa 123"
          value={personalData.address}
        />
        <LabeledInput
          label="Teléfono"
          name="phoneNumber"
          onChange={(e) => onChange(e)}
          placeholder="1111223232"
          value={personalData.phoneNumber}
        />
        <LabeledInput
          label="E-mail"
          name="email"
          onChange={(e) => onChange(e)}
          placeholder="tuturrito@yahoo.com"
          value={personalData.email}
        />
      </>
    );
  }
}

export default PersonalForm;
