import React from "react";

const InputComp = ({ placeholder, title, type, onChange, value, name }) => {
  return (
    <div>
      <h4>{title}</h4>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};

export default InputComp;
