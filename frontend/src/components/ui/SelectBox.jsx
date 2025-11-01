import React from "react";

function SelectBox({ value, onChange, options, placeholder, disabled,name }) {
  return (
    <div className="w-full md:max-w-72">
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="p-1.5 md:p-2  w-full text-sm border bg-white rounded-xl shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">{placeholder}</option>
        {options?.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
