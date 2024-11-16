/* eslint-disable react/prop-types */
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import SearchModalItem from "./SearchModalItem";
import { useContext, useState } from "react";
import { bookContext } from "../../context/bookContext";

function SearchModal({ onClick }) {
  const [text, setText] = useState("");
  const { data } = useContext(bookContext);

  const foundData = data.filter(item => {
    return item.name.toLowerCase().includes(text.toLowerCase());
  });

  return (
    <div
      onClick={onClick}
      className="w-screen h-screen bg-[#191b1981] dark:bg-[#ffffffa9] fixed top-0 left-0 z-20 flex justify-center items-center overflow-auto sm:overflow-hidden"
    >
      <div
        onClick={i => i.stopPropagation()}
        className="w-[90%] sm:w-[900px] h-[460px] bg-white dark:bg-[#171923] rounded-2xl overflow-y-auto sm:overflow-y-auto sm:max-h-[80vh] max-h-[90vh] sm:py-4"
      >
        <div className="bg-white dark:bg-[#171923]">
          <div className="flex justify-end">
            <RxCross1
              onClick={onClick}
              className="text-3xl mx-6 mt-5 cursor-pointer"
            />
          </div>

          <div className="flex items-center rounded-md pb-8 border-b dark:border-[#595959]">
            <div className="pl-4 py-1">
              <CiSearch className="text-2xl" />
            </div>
            <input
              value={text}
              onChange={event => setText(event.target.value)}
              className="focus:outline-none focus:ring-0 w-full border-none focus:border-none dark:bg-[#171923]"
              placeholder="Type your favorite book name here ..."
              type="text"
            />
          </div>
        </div>

        {text ? (
          foundData.map(item => (
            <SearchModalItem key={item.id} item={item} onClick={onClick} />
          ))
        ) : (
          <p className="text-center text-lg font-inter font-normal py-10">
            No item found
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchModal;
