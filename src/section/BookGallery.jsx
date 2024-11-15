/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import BookCart from "./BookCart";
import { bookContext } from "../context/bookContext";

function BookGallery({favoritHandle}) {
  let [favoritarr, setFavoritarr] = useState([])

  const { data } = useContext(bookContext);
  const favoritHandler = (item, id, isFavorit) => {
    const checkActiv = favoritarr.some(i => i.id == id)
    !checkActiv &&
    setFavoritarr([
      ...favoritarr,
      item
    ])
    isFavorit && setFavoritarr(favoritarr.filter(i => i.id !== id))
    
  }
  
  favoritHandle(favoritarr )


  return (
    <div className="col-span-12 lg:col-span-10 xl:col-span-8 grid grid-cols-12 gap-3 sm:gap-7 md:gap-4 lg:gap-7 px-8 pb-8 xl:pt-8 pt-14  border-x dark:border-[#595959] w-fit mx-auto">
      {data.map((item) => (
        <BookCart key={item.id} item={item} favoritHandler={favoritHandler} />
      ))}
    </div>
  );
}

export default BookGallery;
