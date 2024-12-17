import React, { useEffect, useState } from 'react';
import { fetchRooms } from '../api';

const Dashboard = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetchRooms(token).then(data => setRooms(data));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Capacity</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room._id}>
              <td>{room.roomNumber}</td>
              <td>{room.capacity}</td>
              <td>{room.price}</td>
              <td>{room.isAvailable ? 'Available' : 'Occupied'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;