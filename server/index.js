require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server ni!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});