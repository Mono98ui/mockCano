import React from 'react'

const SortButton = ({ changeOrder }) => {

  return (
    <>
      <button onClick={changeOrder}>Sort</button>
    </>
  )
}

export default SortButton