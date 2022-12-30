import React from 'react'

const Arrow = (props) => {

  return (
    <div className="arrow">
        <img src={require("../../images/arrow.png")} alt="" style={{transform:`rotate(${props.dir}deg)`}} />
    </div>
  )
}

export default Arrow