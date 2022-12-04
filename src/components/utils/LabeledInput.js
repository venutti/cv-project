import React from "react";

class LabeledInput extends React.Component {
  render() {
    const { label, name, onChange, type, placeholder, value } = this.props;
    return (
      <label className="d-block form-label mb-3">
        {label}
        <input
          className="form-control form-control-sm"
          name={name}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      </label>
    );
  }
}

export default LabeledInput;
