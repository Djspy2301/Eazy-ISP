import React from "react";

const Input = ({label, type, value, onChange}) => {
    
  return (
    <>
      <label
        htmlFor={label}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>

      <input
        type={type}
        id={label}
        name={label}
        className="border rounded w-full py-2 px-3"
        placeholder={`Enter your ${label}`}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

export default Input;
