/* eslint-disable react/prop-types */

import { getImg } from "../../utils/getimgl"
import { LuMinus } from "react-icons/lu"
import { FiPlus } from "react-icons/fi"
import { HiOutlineTrash } from "react-icons/hi"
import { useContext, useState } from "react"
import { bookContext } from "../../context/bookContext"

function TableModalItems({item }) {
  const [quantity, setQuantity] = useState(1)
  const {cartData, setCartData } = useContext(bookContext)

  const totalPrice = item.price * quantity
  
//    totalHandler(totalPrice)
  


  const deletHandler = () => {
    setCartData(
    cartData.filter(i => {
        return i.id !== item.id
    }))
  }
  
  

  return (
    <tbody>
    <tr className=" border-t">
        <td className="pr-5">
            <div className="flex items-center pt-5">
                <img className="w-16" src={getImg(`../assets/images/book-img/${item.image}`)} alt="Image" />
                <div className="ml-2 ">
                    <h4 className="text-lg font-inter font-medium">{item.name}</h4>
                    <span className="text-base font-inter font-light mt-2 block">{item.author}</span>
                </div>
            </div>
        </td>

        <td className=" px-5">
            <span className="text-base font-inter font-normal">${item.price}</span>
        </td>
        <td className="px-8">
            <div className="w-[135px] h-[36px] flex justify-around items-center rounded-full bg-[#e6dfdfdd] dark:bg-[#595959]">
                <div onClick={() => setQuantity(quantity - 1)} className="flex justify-center items-center w-full h-full">
                    <LuMinus />
                </div>
               
                <span className="flex justify-center items-center w-full h-full">{quantity}</span>

                <div onClick={() => setQuantity(quantity + 1)} className="flex justify-center items-center w-full h-full">
                    <FiPlus />
                </div>
            </div>
        </td>
        <td className=" px-5">
            <span id="item_total">${totalPrice}</span>
        </td>
        <td className="w-12">
            <div onClick={deletHandler} className="text-2xl flex justify-end">
                <HiOutlineTrash className="text-end block" />
            </div>
        </td>

    </tr>
</tbody>
  )
}

export default TableModalItems