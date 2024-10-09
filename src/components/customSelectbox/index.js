import React from "react";
import './style.css';

export default function CustomSelectBox(props) {
  const { title, option, require, handleChange, value } = props
  return (
    <div className="custom-select-frame">
      <label className='input-title'>{
        require ? <p>{title} <span style={{color:"red"}}>*</span></p> : <p>{title}</p>
      } </label>
      <select
        value={value}
        onChange={(event) => {
          handleChange(event)
        }}
      >
        {option?.length && option.map((item, index) => {
          return (
            <option
              key={`select-${index}`}
              value={item.value}
            >
              {item.label}
            </option>
          )
        })}
      </select>
    </div>
  );
}