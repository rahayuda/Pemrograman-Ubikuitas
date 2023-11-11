// script.js
function sendSensorData() {
  // Simulate sensor data (replace this with your actual sensor data)
  const sensorData = {
    orientation: {
      alpha: Math.random() * 360,
      beta: Math.random() * 360,
      gamma: Math.random() * 360
    },
    accelerometer: {
      x: Math.random() * 10,
      y: Math.random() * 10,
      z: Math.random() * 10
    }
    // Add more sensor data as needed
  };

  sendDataToServer(sensorData);
}

function sendDataToServer(data) {
  fetch('/api/sensor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
    console.log('Data sent to server:', result);
    fetchSensorData();
  })
  .catch(error => {
    console.error('Error sending data to server:', error);
  });
}

function fetchSensorData() {
  fetch('/api/sensor')
  .then(response => response.json())
  .then(data => {
    // Process and display data on the web interface
    document.getElementById('sensor-display').innerHTML = JSON.stringify(data, null, 2);
    incrementEventCount();
  })
  .catch(error => {
    console.error('Error fetching sensor data:', error);
  });
}

function incrementEventCount() {
  let counterElement = document.getElementById("num-observed-events");
  let eventCount = parseInt(counterElement.innerHTML)
  counterElement.innerHTML = eventCount + 1;
}
