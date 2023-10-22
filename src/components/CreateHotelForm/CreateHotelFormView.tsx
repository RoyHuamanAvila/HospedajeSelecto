import { ChangeEvent, FC, useState } from "react";
import { Hotel } from "../../interfaces";

const initialHotel: Hotel = {
  name: '',
  numberRooms: 0,
}

interface CreateHotelFormViewProps {
  addHotel: (newHotel: Hotel) => void;
}

const CreateHotelFormView: FC<CreateHotelFormViewProps> = ({ addHotel }) => {
  const [newHotel, setNewHotel] = useState<Hotel>(initialHotel);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewHotel({ ...newHotel, name: e.target.value });
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addHotel(newHotel);
    setNewHotel(initialHotel);
  }

  return (
    <form className="CreateHotelForm" onSubmit={handleSubmit}>
      <h2>Create a Hotel</h2>
      <div className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleChange} value={newHotel.name} />
      </div>
      <button type="submit">Create</button>
    </form>
  )
}
export default CreateHotelFormView
