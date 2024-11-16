/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa"
import { IoHeart, IoHeartOutline } from "react-icons/io5"
import CartModal from "../componant/modals/CartModal"
import { createPortal } from "react-dom"
import { useContext, useState } from "react"
import { bookContext } from "../context/bookContext"

function BookCart({item, favoritHandler}) {
  const [onOpen, setOnOpen] = useState(false)
  const [isFavorit, setIsfavorit] = useState(false)
  const {cartData, setCartData} = useContext(bookContext)

  const ratingarr = [1, 2, 3, 4, 5]

  const handleFavorit = () => {
    favoritHandler(item, item.id, isFavorit)
    setIsfavorit(!isFavorit)
     
  } 
  const clickHandler = () => {
   
  
    
    const dataChak =cartData.some(i => i.id == item.id) 
    !dataChak &&
    setCartData( [
      ...cartData,
      item 
    ]);
    
  }

  
  
  return (
    <div  className="md:col-span-4 sm:col-span-6 col-span-12  p-4 border dark:border-[#595959] rounded-lg">
      <div onClick={() => setOnOpen(!onOpen)}>
          <img  src={item.image} alt="" />
        <h3 className="text-lg font-inter font-medium mt-5">{item.name}</h3>
        <span className="text-sm font-light dark:text-[#8C8C8C]">{item.author}</span>
        </div>
        <div  className="grid grid-cols-8 text-green-400 my-2">
          {ratingarr.map((num) => (
            num <= item.rating && <FaStar key={num}/>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          {/* <button className="text-base font-inter font-medium py-2  bg-green-400">$140 | Add to cart</button> */}
          <button onClick={clickHandler} className={"text-base px-2 py-2 bg-green-400 my-button font-bodyFont rounded-md relative shadow-md dark:text-black z-0"}>${item.price} | Add to cart</button>
          <div onClick={handleFavorit} className="w-[38px] h-[38px] border-2 border-[#00D991] rounded-lg text-2xl flex justify-center items-center text-green-400 ">
            {isFavorit ? <IoHeart /> : <IoHeartOutline />}
          </div>
        </div>
        {onOpen ? createPortal( <CartModal isFavorit={isFavorit} setIsfavorit={setIsfavorit} isFavoritHandler={handleFavorit} favoritHandler={favoritHandler} item={item} onClick={() => setOnOpen(!onOpen)} />, document.getElementById('modal')) : ''}
        
        
      </div>
  )
}

export default BookCart