import { useState } from 'react'
import items from './data.json'
import Item from './components/Item'
import SearchBar from './components/SearchBar'
import SortButton from './components/SortButton'

function App() {
  const [listProducts, setListProducts] = useState(items["products"])

  const applySearch = (searchWord) =>{
    let tmpList = []
    console.log(searchWord.length)
    if(searchWord.length!==0){
      for(let i =0; i < listProducts.length; i++){
        if(listProducts[i].name.includes(searchWord)){
          tmpList.push(listProducts[i])
        }
      }
    setListProducts(tmpList)
    }else{
      setListProducts(items["products"])
    }
  }

  const sortList = (isAcending) =>{
    let sortArray = []
    if(isAcending){
      sortArray =listProducts.map((product)=>{
        return product
      }).sort(function (product1, product2) {
        return product1.impact_score > product2.impact_score;
      })
    }else{
      sortArray =listProducts.map((product)=>{
        return product
      }).sort(function (product1, product2) {
        return product1.impact_score < product2.impact_score;
      })
    }
    setListProducts(sortArray)
  }



  return (
    <>
      <h1>List of product</h1>
      <SearchBar applySearch={applySearch}/>
      <SortButton sortList={sortList}/>
      <ul>
        {listProducts.map((product, index)=>{
        return <Item key={index} name={product.name} impact_score={product.impact_score}/>
      })}
      </ul>
       
    </>
  )
}

export default App
