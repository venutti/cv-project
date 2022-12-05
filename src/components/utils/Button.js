import React from "react";

function Button(props) {
  const { content, onClick, type = "dark" } = props;
  const className = `btn btn-${type} w-100`;
  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
