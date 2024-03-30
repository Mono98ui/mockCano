import React from 'react'
import { useState} from 'react'

const SortButton = ({changeOrder}) => {

  return (
    <>
        <button onClick={changeOrder}>Sort</button>
    </>
  )
}

export default SortButton