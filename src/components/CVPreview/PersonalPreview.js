import React from "react";

class PersonalPreview extends React.Component {
  render() {
    const { firstName, lastName, email, address, phoneNumber, title } =
      this.props.personalData;
    return (
      <div className="header-info">
        <div className="name-info">
          <h2 className="name">
            {firstName} {lastName}
          </h2>
          <div className="title-info">{title}</div>
        </div>
        <div className="other-info">
          <div className="info">
            <i className="fa-regular fa-envelope"></i>
            <p>{email}</p>
          </div>
          <div className="info">
            <i className="fa-solid fa-location-dot"></i>
            <p>{address}</p>
          </div>
          <div className="info">
            <i className="fa-solid fa-phone"></i>
            <p>{phoneNumber}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalPreview;
