import { useContext } from "react"
import { GoChevronRight } from "react-icons/go"
import { bookContext } from "../context/bookContext"

function RightBar() {
  const { setData } = useContext(bookContext)

  const filteringByName = () => {
    setData(item => {
      return item.toSorted((a, b) => a.name.localeCompare(b.name));
    })
  }

  const filterByRetting = () => {
    
    setData(item => {
      
      return [...item].sort((a, b) => b.rating - a.rating)
      
    })
  }
  const filterByPrice = () => {
    
    setData(item => {
      
      return [...item].sort((a, b) => a.price - b.price)
      
    })
  }
  

  return (
    <div id="riht-bar" className="col-span-2 pt-10 pl-10 h-full">
      <div className="fixed">
        <h2 className="text-xl font-inter font-semibold">Filter On Page</h2>
        <ul className="mt-4 ">
          <li onClick={filteringByName} className="flex items-center text-lg mt-2 font-inter cursor-pointer ">
            <GoChevronRight className="mr-2 " />
            <span className="dark:text-[rgba(255,255,255,0.80)]">By name</span>
          </li>
          <li onClick={filterByRetting} className="flex items-center text-lg mt-2 font-inter cursor-pointer ">
            <GoChevronRight className="mr-2 " />
            <span className="dark:text-[rgba(255,255,255,0.80)]">By ratting</span>
          </li>
          <li onClick={filterByPrice} className="flex items-center text-lg mt-2 font-inter cursor-pointer ">
            <GoChevronRight className="mr-2 " />
            <span className="dark:text-[rgba(255,255,255,0.80)]">By price</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default RightBar