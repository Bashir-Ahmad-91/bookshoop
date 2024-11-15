/* eslint-disable react/prop-types */

import { useContext } from 'react';
import './button.css'
import { bookContext } from '../context/bookContext';
function Button(props) {

  const {cartData, setCartData} = useContext(bookContext)

  const clickHandler = () => {
    props.closeButton && props.onClick();

    setCartData( [
      ...cartData,
      props.cartData
    ]);
  }
  
  return (
    <div>
        <button onClick={clickHandler} className={`${props.className ? props.className : "  px-4  "} py-2 bg-green-400 my-button font-bodyFont rounded-md relative shadow-md`}>{props.children}</button>
    </div>
  )
}

export default Button