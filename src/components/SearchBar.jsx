import React from 'react'
import { useState, useEffect } from 'react'

const SearchBar = ({applySearch}) => {
  const [searchKeyword, setSearchKeyword] = useState("")
  const onChangeValue = (e)=>{
    const searchWord = e.target.value
    setSearchKeyword(e.target.value)
    applySearch(searchWord)
  }
  return (
    <>
        <input type="text" placeholder="Search.." value={searchKeyword} onChange={(e)=>onChangeValue(e)}/>
    </> 
  )
}

export {SearchBar as default}