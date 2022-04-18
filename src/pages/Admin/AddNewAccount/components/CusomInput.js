import React from 'react'

export default function CustomInput(props){
  const {placeHolder} = props

  return (
    <input className='input-field' type='text' placeHolder={placeHolder} />
  )
}