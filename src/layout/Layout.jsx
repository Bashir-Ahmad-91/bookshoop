import { useState } from "react"
import Body from "../section/Body"
import Footer from "../section/Footer"
import Navbar from "../section/Navbar"
import { initialData } from "../data/initialData"
import { bookContext } from "../context/bookContext"


function Layout() {
  const [data, setData] = useState(initialData())
  const [cartData, setCartData] = useState([])
  const [open, setOpen] = useState(false)
  const [leftModalOpen, setLeftModalOpen] = useState(false)

  

  const bookProvider = {
    data,
    setData,
    cartData,
    setCartData,
    open,
    setOpen,
    leftModalOpen,
    setLeftModalOpen,
    
    
  }
  


  return (
    <bookContext.Provider value={bookProvider}>
      <Navbar />
      <Body />
      <Footer />
    </bookContext.Provider>

  )
}

export default Layout