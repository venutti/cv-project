import React from "react";
import uniqid from "uniqid";
import CVPreview from "./CVPreview/CVPreview";
import CVForm from "./CVForm/CVForm";

const cvEmpty = {
  personalData: {
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    phoneNumber: "",
    email: "",
  },
  experienceData: [
    {
      id: uniqid(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  educationData: [
    {
      id: uniqid(),
      universityName: "",
      city: "",
      degree: "",
      from: "",
      to: "",
    },
  ],
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cv || cvEmpty;
  }

  handleChangePersonalData(event) {
    const { name, value } = event.target;
    this.setState({
      personalData: {
        ...this.state.personalData,
        [name]: value,
      },
    });
  }

  handleChangeEducationData(event, id) {
    const { name, value } = event.target;
    this.setState({
      educationData: this.state.educationData.map((education) => {
        if (education.id === id) {
          return { ...education, [name]: value };
        } else {
          return education;
        }
      }),
    });
  }
  handleRemoveEducationData(id) {
    this.setState({
      educationData: this.state.educationData.filter(
        (education) => education.id !== id
      ),
    });
  }
  handleAddEducationData() {
    this.setState({
      educationData: [
        ...this.state.educationData,
        {
          id: uniqid(),
          universityName: "",
          city: "",
          degree: "",
          from: "",
          to: "",
        },
      ],
    });
  }

  handleChangeExperienceData(event, id) {
    const { name, value } = event.target;
    this.setState({
      experienceData: this.state.experienceData.map((experience) => {
        if (experience.id === id) {
          return { ...experience, [name]: value };
        } else {
          return experience;
        }
      }),
    });
  }
  handleRemoveExperienceData(id) {
    this.setState({
      experienceData: this.state.experienceData.filter(
        (experience) => experience.id !== id
      ),
    });
  }
  handleAddExperienceData() {
    this.setState({
      experienceData: [
        ...this.state.experienceData,
        {
          id: uniqid(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    });
  }

  render() {
    return (
      <>
        <CVForm
          {...this.state}
          onChangePersonal={this.handleChangePersonalData.bind(this)}
          onChangeEducation={this.handleChangeEducationData.bind(this)}
          onRemoveEducation={this.handleRemoveEducationData.bind(this)}
          onAddEducation={this.handleAddEducationData.bind(this)}
          onChangeExperience={this.handleChangeExperienceData.bind(this)}
          onRemoveExperience={this.handleRemoveExperienceData.bind(this)}
          onAddExperience={this.handleAddExperienceData.bind(this)}
        ></CVForm>
        <CVPreview {...this.state}></CVPreview>
      </>
    );
  }
}

export default Main;
