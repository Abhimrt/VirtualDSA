import React from 'react'


const ArrayBox = (props) => {
  return (
    <div className="ArrayBox center">
      <span className='up'>{props.up}</span>
      <p>{props.content}</p>
      <span className='down'>{props.down}</span>
    </div>
  )
}

export default ArrayBox