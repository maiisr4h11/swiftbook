const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());


const userRoutes = require('./routes/userroute');
app.use('/api/users', userRoutes);


const foodFestRoutes = require('./routes/foodfestroute');
app.use('/api/foodfest', foodFestRoutes);

const reservationRoutes = require('./routes/reservationroute');
app.use('/api/reservations', reservationRoutes);

const eventspaceRoutes = require('./routes/eventspaceroute');
app.use('/api/eventspaces', eventspaceRoutes);

const bookVendorRoutes = require('./routes/bookvendorroute');
app.use('/api/book-vendor', bookVendorRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});



mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });