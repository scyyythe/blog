require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server ni!' });
});


app.get('/api/test-connection', (req, res) => {
  res.json({ 
    status: 'success',
    message: 'Server is connected!',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});