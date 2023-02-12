import React from 'react'
import "./CAlert.css"
const CAlert = (props) => {

  return (
    <div className="middle-box" >
      <div className='Alert-Header'> 
      <h6>{'Success'}</h6>
      <span  onClick={props.close}>❌</span>
      </div> 
      <hr/>
      {props.msg}
    </div>
  )
}

export default CAlert
