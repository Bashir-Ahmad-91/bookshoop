/* eslint-disable react/prop-types */

import { RxCross1 } from "react-icons/rx"
import TableModalItems from "./TableModalItems"
import { useContext, useEffect } from "react"
import { bookContext } from "../../context/bookContext"

function EmptyData() {
    return (
        <tbody>
            <tr>
                <td>
                    <p className="text-lg mt-4">No Data Found....</p>
                </td>
            </tr>
        </tbody>
    )
}

function TableModal({ onClick, onOpen }) {
    const { cartData } = useContext(bookContext)

     useEffect(() => {
        function totalHandle() {
            const totalPrice = document.getElementById('item_total').innerText
            console.log(totalPrice);
        }
        totalHandle()
    }, [cartData])


    return (
        <div onClick={onClick} className="w-screen h-screen bg-[#191b1942] dark:bg-[#fffa] fixed top-0 left-0 z-20 flex justify-center items-center  ">
            <div onClick={i => i.stopPropagation()} className=" w-[1100px] h-[550px] overflow-auto fixed  bg-white dark:bg-[#171923]  rounded-lg px-10 py-6 ">

                <div className="flex justify-end"><RxCross1 onClick={onClick} className="text-3xl" /></div>

                <h2 className="text-2xl font-inter font-medium text-center mb-7">Your Carts</h2>

                <div className="grid grid-cols-12">
                    <div className=" col-span-9 ">


                        <table className=" w-[700px]">
                            <thead className="">
                                <tr>
                                    <th className="text-base font-inter font-medium pb-5 text-left">Product</th>
                                    <th className="text-base font-inter font-medium pb-5 text-center">price</th>
                                    <th className="text-base font-inter font-medium pb-5 text-center">Quantity</th>
                                    <th className="text-base font-inter font-medium pb-5 text-center">Total</th>
                                </tr>

                            </thead>

                            {cartData.length !== 0 ?
                                cartData.map((i) => (
                                    <TableModalItems onOpen={onOpen} key={i.id} item={i} />
                                ))
                                :
                                <EmptyData />}

                        </table>
                    </div>

                    <div className="col-span-3 overflow-auto">
                        <div className="">
                            <div className="bg-gray-200 dark:bg-[rgba(140,140,140,0.30)] rounded">
                                <h4 className="text-2xl pb-10 border-b-2 border-white pt-9 text-center">Order summary</h4>
                                <div className="flex justify-between items-center px-10 mt-6">
                                    <span>Subtotal</span>
                                    <span>$300</span>
                                </div>
                                <div className="flex justify-between items-center px-10 mt-4">
                                    <span>Shipping</span>
                                    <span className="text-green-400">Free</span>
                                </div>


                                <div className="flex justify-between items-center px-10 mt-4 bg-gray-300 dark:bg-[rgba(140,140,140,0.26)] py-2">
                                    <span>Total</span>
                                    <span id="total">$300</span>
                                </div>
                            </div>

                            <button className="w-full bg-green-400 mt-5 py-3 text-2xl text-white">Checkout</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default TableModal