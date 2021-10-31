import axios from 'axios';
import { React, useEffect, useState, useContext } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import env from "./settings";
import dataContext from "./ContextData";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

function BookedRooms() {
    const data = useContext(dataContext);
    const [rooms,setRooms] = useState([]); 

const getBookedRoom = async () => {
    try {
        let roomBook = await axios.get(`${env.api}/roomsbooked`,{
          headers : {
            "Authorization" : window.localStorage.getItem("app_token")
          }
        })
        console.log(roomBook.data)
        setRooms([...roomBook.data])
    } catch (error) {
        
    }
}

    useEffect(() => {
        getBookedRoom();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      let totalPrice;
    return (
        <>
        <div>
            {rooms.map((e, index) => (
        <div key={e._id} className="searchResults">
          
            <img
              src={e.link}
              alt="img"
              className="room-img"
              key={"img"}
            />
           

          <div className="searchResults_text">
            <div className="searchResults_top_text">
              <h3>{e.hotelname}</h3>
              <h3>{e.location}</h3>
              <p>_____</p>
              <ReadMore>{e.desc}</ReadMore>
            </div>
            <div className="searchResults_bottom_text">
              <div className="searchResults_stars">
                <p>
                  <strong>{e.rating}</strong>
                </p>
                <StarIcon className="searchResults_star" />
              </div>
              <div className="searchResults_price">
                <h3>{e.price}/night</h3>
                <h4>
                  Total Price : {( totalPrice = data.days * e.price)} for{" "}
                  {data.days} days
                </h4>
              </div>
            </div>
          </div>

          <FavoriteBorderIcon className="searchResults_heart" />
        </div>
        ))}
        </div>
        </>
    )
}

export default BookedRooms
