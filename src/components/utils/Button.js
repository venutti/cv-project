import React from "react";

class Button extends React.Component {
  render() {
    const { content, onClick, type = "dark" } = this.props;
    const className = `btn btn-${type} w-100`;
    return (
      <button className={className} onClick={onClick}>
        {content}
      </button>
    );
  }
}

export default Button;
