import { IoCartOutline, IoNotifications } from "react-icons/io5"
import { MdOutlineLightMode } from "react-icons/md"
import { useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import TableModal from "../componant/modals/TableModal"
import { bookContext } from "../context/bookContext"
import logo from '../assets/images/logo.png'

function Navbar() {
  const [onOpen, setOnOpen] = useState(false)
  const {cartData} = useContext(bookContext)
  let [theme, setTheme] = useState(false);

  let themeHandler = () => {
    setTheme(!theme)

    localStorage.setItem('darkTheme', !theme)
  }

  useEffect(() => {
    if (localStorage.getItem('darkTheme') == 'true') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')

    }
  }, [theme])

  return (
    <div className="border-b dark:border-[#595959] fixed w-full bg-white dark:bg-[#171923] z-10">
      <div className="max-w-[300px] sm:max-w-[1445px] sm:mx-auto flex justify-between py-5">
        <div>
          <img className="w-28" src={logo} alt="logo" />
        </div>
        <div className="flex justify-end mr-6">
          <ul className="flex items-center">
            <li className="text-2xl text-[#00D991] w-11 h-11 border-2 border-[#00D991] rounded-md bg-[rgba(46,224,165,0.20)] ml-5 sm:flex justify-center items-center cursor-pointer hidden "><IoNotifications /></li>
            <li onClick={themeHandler} className="text-2xl text-[#00D991] w-11 h-11 border-2 border-[#00D991] rounded-md bg-[rgba(46,224,165,0.20)] ml-5 flex justify-center items-center cursor-pointer"><MdOutlineLightMode /></li>
            <li onClick={() => setOnOpen(true)} className="text-2xl text-[#00D991] w-11 h-11 border-2 border-[#00D991] rounded-md bg-[rgba(46,224,165,0.20)] ml-5 flex justify-center items-center cursor-pointer relative"><IoCartOutline />
              {cartData.length > 0 && <span className="w-7 h-7 bg-[#009A67] text-white rounded-full text-sm absolute top-[-14px] right-[-14px] flex justify-center items-center">{cartData.length > 9 ? cartData.length : "0" + cartData.length}</span>}
              
            </li>
          </ul>
        </div>
      </div>

      {onOpen ? createPortal( <TableModal onOpen={onOpen} onClick={() => setOnOpen(!onOpen)} />, document.getElementById('modal')) : ''}

    </div>
  )
}

export default Navbar