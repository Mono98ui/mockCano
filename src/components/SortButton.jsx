import React from 'react'
import { useState } from 'react'

const SortButton = ({ sortList }) => {
  const [orderBy, setOrderBy] = useState(0)

  const changeOrder = () => {

    let nbr = orderBy + 1
    if (nbr > 2) {
      nbr = 0
    }
    setOrderBy(nbr)
    sortList(nbr)

  }

  return (
    <>
      <button onClick={changeOrder}>Sort</button>
    </>
  )
}

export default SortButton