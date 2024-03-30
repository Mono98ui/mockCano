import React from 'react'

const Item = ({name, impact_score}) => {
  return (
    <>
        <li>{name +" "+impact_score}</li>

    </>
  )
}

export default Item