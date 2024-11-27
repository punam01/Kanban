import React from 'react';
import '../Dropdown/Dropdown.css'
const Dropdown = ({ label, options, onChange }) => {
  return (
    <div className="dropdown-component">
      <label className='dropdown-label'>{label}</label>
      <select onChange={(e) => onChange(e.target.value)}>
        
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
