import { TiArrowLeft } from "react-icons/ti"
import RightModal from "./RightModal"
import { createPortal } from "react-dom"
import { useContext } from "react"
import { bookContext } from "../../../context/bookContext"

function RightButton() {
    const {open, setOpen} = useContext(bookContext)
    const clickHandler = () => {
        setOpen(!open)

    }
    return (
        <div onClick={clickHandler} className="xl:hidden w-screen fixed bg-white dark:bg-[#171923] flex justify-end z-10">
            <div className=" py-4 pr-4 flex items-center text-green-400 hover:scale-110 transition-all ease-linear duration-[0.3s]">
                <TiArrowLeft className="text-2xl" />
                <button className=" ">

                    Filter On Page
                </button>
               
            </div>
            {open && createPortal( <RightModal />, document.getElementById('modal'))}
        </div>
      
    )

}

export default RightButton