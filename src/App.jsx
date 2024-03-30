import { useState } from 'react'
import items from './data.json'
import SearchBar from './components/SearchBar'
import SortButton from './components/SortButton'
import Items from './components/Items'

function App() {

  const [listProducts, setListProducts] = useState(items["products"])
  const [listProductsInit, setListProductsInit] = useState(items["products"])

  const applySearch = (searchWord) => {
    let tmpList = []

    //Search product containing the specify word
    if (searchWord.length !== 0) {
      for (let i = 0; i < items["products"].length; i++) {
        if (items["products"][i].name.includes(searchWord)) {
          tmpList.push(items["products"][i])
        }
      }

      setListProducts(tmpList)
      setListProductsInit(tmpList)

    }
    //Reinitialize the product listing 
    else {

      setListProducts(items["products"])
      setListProductsInit(items["products"])

    }
  }

  const sortList = (orderBy) => {
    let sortArray = []

    //Ascending list
    if (orderBy === 1) {

      sortArray = listProducts.map((product) => {
        return product
      }).sort(function (product1, product2) {
        return product1.impact_score > product2.impact_score;
      })

    } 
    //Descending list
    else if (orderBy === 2) {

      sortArray = listProducts.map((product) => {
        return product
      }).sort(function (product1, product2) {
        return product1.impact_score < product2.impact_score;
      })

    }
    //Initial list 
    else {

      sortArray = listProductsInit
    }

    setListProducts(sortArray)
  }



  return (
    <>
      <h1>List of products</h1>
      <SearchBar applySearch={applySearch} />
      <SortButton sortList={sortList} />
      <Items listProducts={listProducts} />
    </>
  )
}

export default App
