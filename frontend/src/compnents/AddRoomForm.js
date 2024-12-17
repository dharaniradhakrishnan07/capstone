import React, { useState } from 'react';

const AddRoomForm = ({ addRoom }) => {
  const [roomDetails, setRoomDetails] = useState({
    roomNumber: '',
    bedCount: '',
    price: '',
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRoom(roomDetails);  // Pass the room details to the parent component for API call
    setRoomDetails({ roomNumber: '', bedCount: '', price: '', availability: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Room</h2>
      <input
        type="text"
        name="roomNumber"
        value={roomDetails.roomNumber}
        onChange={handleChange}
        placeholder="Room Number"
        required
      />
      <input
        type="number"
        name="bedCount"
        value={roomDetails.bedCount}
        onChange={handleChange}
        placeholder="Bed Count"
        required
      />
      <input
        type="number"
        name="price"
        value={roomDetails.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <select
        name="availability"
        value={roomDetails.availability}
        onChange={handleChange}
        required
      >
        <option value="">Select Availability</option>
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>
      <button type="submit">Add Room</button>
    </form>
  );
};

export default AddRoomForm;