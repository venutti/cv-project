import React from "react";
import EducationItemPreview from "./EducationItemPreview";

class EducationPreview extends React.Component {
  renderEducationItemPreview(educationData) {
    return educationData.map((education) => (
      <EducationItemPreview key={education.id} educationData={education} />
    ));
  }

  render() {
    return (
      <div className="education-info">
        <h3 className="preview-subtitle">Educación</h3>
        {this.renderEducationItemPreview(this.props.educationData)}
      </div>
    );
  }
}

export default EducationPreview;
