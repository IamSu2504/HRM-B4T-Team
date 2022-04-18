import React from 'react'
import './style.css';

export default function CustomInputField(props){
  const {title, type, value, require, disabled, handleChange} = props
  return (
    <div className='custom-input-frame'>
      <label className='input-title'>{
        require ? <p>{title} <span>*</span> :</p> : <p>{title}</p>
      }</label>
      <input 
        type={type} 
        value={value} 
        disabled={disabled}
        onChange={(event) => handleChange(event)}
      />
    </div>
  )
}