import React, { useState, useEffect } from 'react';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const response = await fetch('/api/rooms');
    const data = await response.json();
    setRooms(data);
  };

  return (
    <div>
      <h2>Room List</h2>
      <table>
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Bed Count</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room._id}>
              <td>{room.roomNumber}</td>
              <td>{room.bedCount}</td>
              <td>{room.price}</td>
              <td>{room.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomList;