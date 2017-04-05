// node on mac
//https://developer.leapmotion.com/documentation/javascript/api/Leap.Hand.html#Hand.yaw

const Leap = require('leapjs');
const fetch = require('node-fetch');

let lastFrame = null;

// Constantly update last frame
Leap.loop((frame) => {
  lastFrame = frame;
});

// Post frames to server
function sendFrame() {
  if (lastFrame === null || lastFrame.hands.length === 0) {
    setTimeout(() => {
      sendFrame();
    }, 100);
    return;
  }

  const data = {
    yaw: lastFrame.hands[0].yaw()
  };
  console.log(data);

  fetch('http://localhost:8080/sensor-update', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).
  then((response) => response.text()).
  then((text) => sendFrame());
}

sendFrame();
