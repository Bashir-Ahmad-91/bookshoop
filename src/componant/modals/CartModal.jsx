/* eslint-disable react/prop-types */
import { IoHeart, IoHeartOutline } from "react-icons/io5"
import { useContext } from "react"
import { bookContext } from "../../context/bookContext"


function CartModal({onClick, item, favoritHandler, isFavoritHandler, isFavorit, setIsfavorit }) {
  const {cartData, setCartData} = useContext(bookContext)

  
  

    const cartDataHandler = () => {
        onClick()
      
        
        const dataChak =cartData.some(i => i.id == item.id) 
        !dataChak &&
        setCartData( [
          ...cartData,
          item
        ]);
    }
    const handleFavorit = () => {
        favoritHandler(item, item.id, isFavorit)
        setIsfavorit(!isFavorit)
        isFavoritHandler(() => setIsfavorit(!isFavorit))
      }
    
    return (
        <div onClick={() => onClick()} className="w-screen h-screen bg-[#191b1924] dark:bg-[#ffffffbb] fixed top-0 left-0 z-20 flex justify-center items-center">
            <div onClick={i => i.stopPropagation()} className="w-[800px] bg-white dark:bg-[#171923] grid grid-cols-4 rounded-2xl overflow-x-auto fixed">
                <div className="col-span-3 pl-12 pr-4 pt-10 mb:3">
                    <h2 className="text-3xl font-inter font-semibold">Prenlter Prestion Pssquik</h2>
                    <span className="text-sm font-inter font-normal mt-2">Comedy/Drama</span>
                    <p className="text-sm font-inter font-light mt-6">When I Feel Alone is a deeply introspective story that explores themes of isolation, connection, and healing. Through the protagonist journey, readers are reminded of the importance of reaching out and finding support in others.</p>
                    <div className="flex items-center mt-5">
                        <button  onClick={cartDataHandler} className={'px-8 py-2 bg-green-400 my-button font-bodyFont rounded-md relative shadow-md'}>$140 | Add to cart</button>
                        <div>
                            <div onClick={handleFavorit} className="w-[38px] h-[38px] mx-5 border-2 border-[#00D991] rounded-lg text-2xl flex justify-center items-center text-green-400">
                                {isFavorit ? <IoHeart /> : <IoHeartOutline />}
                            </div>
                        </div>
                        <button onClick={() => onClick()} className="px-4 py-2 bg-white text-black my-button font-bodyFont rounded-md relative shadow-md" >Close</button>
                    </div>

                </div>
                <img className="overflow-hidden rounded-r-2xl " src={`${item.image}`} alt="" />
            </div>

        </div>
    )
}

export default CartModal