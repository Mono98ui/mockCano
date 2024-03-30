import { useState, useEffect } from 'react'
import items from './data.json'
import Item from './components/Item'
import SearchBar from './components/SearchBar'
import SortButton from './components/SortButton'

function App() {
  const listProducts = items["products"]

  return (
    <>
      <h1>List of product</h1>
      <SearchBar/>
      <SortButton/>
      <ul>
        {listProducts.map((product, index)=>{
          return <Item key={index} name={product.name} score={product.impact_score}/>
        })}
      </ul>
       
    </>
  )
}

export default App
