// routes/busRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db.js');

// Get All Bus Routes
router.get('/api/bus_Routes',(req, res) => {
  const query = 'SELECT * FROM bus_table';
  console.log("haah")
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.json(results);
  });
});

// Get a specific bus route by ID
router.get('/routes/busRoutes/:id', (req, res) => {
  const routeId = parseInt(req.params.id);
  const query = 'SELECT * FROM bus_table WHERE code = ?';
  db.query(query, [routeId], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Route not found' });
    }

    res.json(results[0]);
  });
});

module.exports = router;
