/* eslint-disable react/prop-types */
import { AiOutlineFire } from "react-icons/ai"
import { CiSearch } from "react-icons/ci"
import { IoHeartOutline } from "react-icons/io5"
import { MdOutlineDriveFileMove, MdOutlineUpcoming } from "react-icons/md"
import SearchModal from "../componant/modals/SearchModal"
import { useContext, useState } from "react"
import { createPortal } from "react-dom"
import { bookContext } from "../context/bookContext"
import { initialData } from "../data/initialData"

function LeftBar({favoritData}) {
  const [onOpen, setOnOpen] = useState(false)
  const { setData, leftModalOpen, setLeftModalOpen } = useContext(bookContext);
  const allDAta = initialData()
  
  


  const releseHandler = () => {
    setData(allDAta.filter((item) => {
        return "new_releases" == item.status
    }))
    
  }

  const comingHandler = () => {
      setData(allDAta.filter((item) => {
        
        return "coming_soon" == item.status
    }))
  }
  const trendingHandler = () => {
      setData(allDAta)
        
        
    }
  

    return (
        <div  onClick={() => setLeftModalOpen(!leftModalOpen)} className={`col-span-2 xl:pt-10 pt-14 pr-10 pl-5   lg:block   ${leftModalOpen ? 'block ' : 'hidden'}`}>
            <div className="fixed">
                <div onClick={() => setOnOpen(true)} className="border border-[#2EE0A5] flex items-center  rounded-md">
                    <div className="px-2 py-1">
                        <CiSearch className="text-2xl " />
                    </div>
                    <input className="bg-transparent focus:outline-none focus:ring-0 max-w-28 border-none focus:border-none" placeholder="Quick search..." type="text" />
                </div>

                <div onClick={trendingHandler} className="flex items-center text-lg mt-3 py-2 px-2 rounded-md transition-all ease-linear duration-[0.3s] hover:bg-green-300 cursor-pointer">
                    <AiOutlineFire className="mr-3 " />
                    <span>Trending</span>
                </div>

                <div onClick={releseHandler} className="flex items-center text-lg mt-3 py-2 px-2 rounded-md transition-all ease-linear duration-[0.3s] hover:bg-green-300 cursor-pointer">
                    <MdOutlineDriveFileMove className="mr-3 " />
                    <span>Ne Releases</span>
                </div>

                <div onClick={comingHandler} className="flex items-center text-lg mt-3 py-2 px-2 rounded-md transition-all ease-linear duration-[0.3s] hover:bg-green-300 cursor-pointer">
                    <MdOutlineUpcoming className="mr-3 " />
                    <span>Coming Soon</span>
                </div>

                <div onClick={() => setData(favoritData)} className="flex items-center text-lg mt-3 py-2 px-2 rounded-md transition-all ease-linear duration-[0.3s] hover:bg-green-300 cursor-pointer">
                    <IoHeartOutline className="mr-3 " />
                    <span>Favorites</span>
                </div>
                {onOpen ? createPortal( <SearchModal onClick={() => setOnOpen(!onOpen)} />, document.getElementById('modal')) : ''}

            </div>



        </div>
    )
}

export default LeftBar