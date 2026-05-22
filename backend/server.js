require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path'); // 👈 necessary for resolving folder path

require('./config/db');

app.use(cors());
app.use(express.json());

// 👇 Serve uploaded images statically
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/', require('./routes/authRoutes'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
