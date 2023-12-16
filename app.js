// app.js
const express = require('express');
const app = express();
const connection = require('./config/db.js');
const busRoutes = require('./routes/busRoutes');

app.use('/api',busRoutes);


// Sample route
app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM bus_table', (err, results) => {
    if (err) {
      console.error('Error querying the database:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
