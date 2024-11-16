/* eslint-disable react/prop-types */

import { useContext } from "react"
import { bookContext } from "../../context/bookContext"

function SearchModalItem({item, onClick}) {
  const {setData} = useContext(bookContext)

  const chlickHandler = () => {
    setData([
      item
    ])
    onClick()

  }
    
  return (
    <div onClick={chlickHandler} className="flex items-center pl-8 my-5 transition duration-[0.4s] hover:bg-green-400">
    <img className="w-14" src={`${item.image}`} alt="image" />
    <div className="ml-7">
        <h3 className="text-lg font-inter font-medium">{item.name}</h3>
        <p className="text-sm font-light">{item.author}</p> 
        <span className="text-sm font-medium">BDT: {item.price} TK</span>
    </div>
</div>
  )
}

export default SearchModalItem