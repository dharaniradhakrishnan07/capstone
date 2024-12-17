const express = require('express');
const Room = require('../models/Room');
const router = express.Router();

// Get all rooms
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Error fetching rooms" });
  }
});

// Add a room
router.post('/', async (req, res) => {
  const { roomNumber, capacity, price } = req.body;
  try {
    const room = new Room({ roomNumber, capacity, price });
    await room.save();
    res.status(201).json({ message: "Room added successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error adding room" });
  }
});

module.exports = router;