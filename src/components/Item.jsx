import React from 'react'

const Item = ({name, impact_score}) => {
  return (
    <>
        <li>{`Name: ${name} impact_score: ${impact_score}`}</li>

    </>
  )
}

export default Item