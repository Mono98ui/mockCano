import React from 'react'
import { useState, useEffect } from 'react'

const SearchBar = ({applySearch}) => {
  const [searchKeyword, setSearchKeyword] = useState("")
  const onChangeValue = (e)=>{
    setSearchKeyword(e.target.value)
    applySearch(e.target.value)
  }
  return (
    <>
        <input type="text" placeholder="Search.." value={searchKeyword} onChange={(e)=>onChangeValue(e)}/>
    </> 
  )
}

export {SearchBar as default}