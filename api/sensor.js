// api/sensor.js
module.exports = (req, res) => {
  if (req.method === 'POST') {
    const sensorData = req.body; // Assuming data is sent in the request body

    // Process and save sensorData (e.g., save to a database)

    res.status(200).json({ message: 'Data received successfully' });
  } else if (req.method === 'GET') {
    // Return sensor data (e.g., from a database)
    const data = {
      orientation: {
        alpha: 123,
        beta: 456,
        gamma: 789
      },
      accelerometer: {
        x: 1.23,
        y: 4.56,
        z: 7.89
      }
      // Add more sensor data as needed
    };

    res.status(200).json(data);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
