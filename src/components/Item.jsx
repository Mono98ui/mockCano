import React from 'react'

const Item = ({name, score}) => {
  return (
    <>
        <li>{name +" "+score}</li>

    </>
  )
}

export default Item