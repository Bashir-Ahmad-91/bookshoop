import { TiArrowRight } from "react-icons/ti"
import LeftModal from "./LeftModal"
import { useContext } from "react"
import { bookContext } from "../../../context/bookContext"

function LeftButton() {
    const {leftModalOpen, setLeftModalOpen} = useContext(bookContext)
    const clickHandler = () => {
        setLeftModalOpen(!leftModalOpen)
    }
    return (
      <div onClick={clickHandler} className="lg:hidden fixed left-4 z-30">
          <div className="lg:hidden fixed left-4 py-4  flex items-center text-green-400 hover:text-lg transition-all ease-linear duration-[0.3s] z-30">
            <button className=" ">For quick search</button>
              <TiArrowRight className="text-2xl" />
        </div>
        <LeftModal />
      </div>
    )

}

export default LeftButton