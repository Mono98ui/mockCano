import { useState } from 'react'
import items from './data.json'
import Item from './components/Item'
import SearchBar from './components/SearchBar'
import SortButton from './components/SortButton'

function App() {
  const [listProducts, setListProducts] = useState(items["products"])
  const [listProductsInit, setListProductsInit] = useState(items["products"])


  const [orderBy, setOrderBy] = useState(0)

  const changeOrder = ()=>{
    let nbr = orderBy+1
    if(nbr > 2){
      nbr = 0
    }
    setOrderBy(nbr)
    sortList(nbr)
  }

  const applySearch = (searchWord) =>{
    let tmpList = []
    if(searchWord.length!==0){
      for(let i =0; i < items["products"].length; i++){
        if(items["products"][i].name.includes(searchWord)){
          tmpList.push(items["products"][i])
        }
      }
    setListProducts(tmpList)
    }else{
      setListProducts(items["products"])
    }
    setListProductsInit(tmpList)
  }

  const sortList = (orderBy) =>{
    let sortArray = []
    if(orderBy === 1){
      sortArray =listProducts.map((product)=>{
        return product
      }).sort(function (product1, product2) {
        return product1.impact_score > product2.impact_score;
      })
    }else if( orderBy === 2){
      sortArray =listProducts.map((product)=>{
        return product
      }).sort(function (product1, product2) {
        return product1.impact_score < product2.impact_score;
      })
    }else{
      sortArray = listProductsInit
    }
    setListProducts(sortArray)
  }



  return (
    <>
      <h1>List of product</h1>
      <SearchBar applySearch={applySearch}/>
      <SortButton changeOrder={changeOrder}/>
      <ul>
        {listProducts.map((product, index)=>{
        return <Item key={index} name={product.name} impact_score={product.impact_score}/>
      })}
      </ul>
       
    </>
  )
}

export default App
