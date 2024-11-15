import { useState } from "react"
import LeftButton from "../componant/modals/sidebar/LeftButton"
import RightButton from "../componant/modals/sidebar/RightButton"
import BookGallery from "./BookGallery"
import LeftBar from "./LeftBar"
import RightBar from "./RightBar"

function Body() {
    const [favoritData, setFavoritData] = useState([])
    const favoritHandler = (favoriData1) => {
        setFavoritData(favoriData1)
        

    }
    return (
        <div className="max-w-[1450px] mx-auto ">
            <div className=" grid grid-cols-12 pt-24 justify-center ">
                <LeftBar favoritData={favoritData} />
                
                <RightButton />
                <LeftButton />

                <BookGallery favoritHandle={favoritHandler} />
                <RightBar />
            </div>

        </div>
    )
}

export default Body