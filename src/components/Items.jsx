import React from 'react'
import Item from './Item'

const Items = ({ listProducts }) => {
  return (
    <>
      <ul>
        {listProducts.map((product, index) => {
          return <Item key={index} name={product.name} impact_score={product.impact_score} />
        })}
      </ul>
    </>
  )
}

export default Items