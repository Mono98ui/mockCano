import React from 'react'

const Item = ({ name, impact_score }) => {
  return (
    <>
      <div className="card">
        <h2>{name}</h2>
        <p className="impact">Environmental Impact: {impact_score}</p>
      </div>
    </>
  )
}

export default Item