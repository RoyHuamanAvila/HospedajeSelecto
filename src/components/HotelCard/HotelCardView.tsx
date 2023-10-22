import { FC } from "react"
import { Hotel } from "../../interfaces"

interface HotelCardViewProps {
  hotel: Hotel
}

const HotelCardView: FC<HotelCardViewProps> = ({ hotel }) => {
  return (
    <div className="Hotel-Card">
      <h3>{hotel.name}</h3>
      <p>Number of rooms: {hotel.numberRooms}</p>
    </div>
  )
}
export default HotelCardView
