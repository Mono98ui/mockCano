import { useState, useEffect } from 'react'
import items from './data.json'
import Item from './components/Item'
import SearchBar from './components/SearchBar'

function App() {
  const listProducts = items["products"]

  return (
    <>
      <h1>List of product</h1>
      <SearchBar/>
      <ul>
        {listProducts.map((product)=>{
          return <Item name={product.name} score={product.impact_score}/>
        })}
      </ul>
       
    </>
  )
}

export default App
