import { useContext } from "react"
import LeftBar from "../../../section/LeftBar"
import { bookContext } from "../../../context/bookContext"

function LeftModal() {
    const {leftModalOpen } = useContext(bookContext)

  return (
    <div className={`h-full w-48 bg-white dark:bg-[#171923] z-10 fixed transition-all ease-linear duration-[0.2s]  ${leftModalOpen ? 'left-0' : '-left-[50%]'}`}>
        <LeftBar />
    </div>
  )
}

export default LeftModal