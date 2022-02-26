import React from "react";
import './inputGroup.css'

const InputGroup = (props) => {
  return (
    <div className="inputGroup">
      <h1 className="inputQuestion">{props.text}</h1>
      <div className="buttonAndFieldInput">
        <input
          className="searchInput"
          placeholder={props.placeholder}
          type="text"
        />
        <button className="contain_Search_Button">
          {props.button}
        </button>
      </div>
    </div>
  );
};

export default InputGroup;