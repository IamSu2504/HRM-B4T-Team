import React from "react";

export default function StatisticalAccount(props){
  const {imageLink, rightBgColor, title, data} = props

  return(
    <div className='statistical-account-cp'>
      <div className="image" style={{background: rightBgColor}}>
        <img src={imageLink} />
      </div>
      <div className="content">
        <div>{title}</div>
        <div style={{fontWeight: 700}}>{data}</div>
      </div>
    </div>
  )
}