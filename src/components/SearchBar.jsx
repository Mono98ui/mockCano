import React from 'react'
import { useState, useEffect } from 'react'

const SearchBar = () => {
    const [searchKeyword, setSearchKeyword] = useState("")
  return (
    <>
        <input type="text" placeholder="Search.." value={searchKeyword} onChange={(e)=>setSearchKeyword(e.target.value)}/>
    </> 
  )
}

export default SearchBar