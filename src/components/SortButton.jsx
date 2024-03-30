import React from 'react'
import { useState} from 'react'

const SortButton = ({sortList}) => {
  const [isAcending, setIsAscending] = useState(true)
  const changeOrder = ()=>{
    setIsAscending(!isAcending)
    sortList(!isAcending)
  }
  return (
    <>
        <button onClick={changeOrder}>Sort</button>
    </>
  )
}

export default SortButton