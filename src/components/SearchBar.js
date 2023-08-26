import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = () => {
  return (
    <div className=' ml-[223px] mt-[40px] border rounded-full flex items-center h-[68px] w-[1003px] bg-slate-50'>
        <AiOutlineSearch className=' w-10'/>
        <input className='w-[904px] h-[28px] bg-slate-50' type=' text' placeholder='Search your word'/>
    </div>
  )
}

export default SearchBar