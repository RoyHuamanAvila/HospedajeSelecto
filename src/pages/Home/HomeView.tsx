import { useState } from "react";
import { CreateHotelFormView, HotelCard } from "../../components"
import { Hotel } from "../../interfaces";

const HomeView = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);

  const addHotel = async (newHotel: Hotel) => {
    setHotels([...hotels, newHotel])
  }

  return (
    <div className="Home">
      <h1>Home</h1>
      <CreateHotelFormView addHotel={addHotel} />
      <div className="list-hotels">
        <h2>Hotels</h2>
        <ul>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.name} hotel={hotel} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HomeView
