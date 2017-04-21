# Howdy curious gem!! ;)

## About

This repo creates a hologram that can be manipulated with your hand movement using a leap motion device.

## Hardware

To do the magic, you will need your laptop, a mobile device, a leap motion device (and install leap motion in your machine), and a prism.

## Software

You will also need node.js and yarn.

## How to??

1. Clone repo
2. Run `yarn install`
3. Push repo to Heroku
4. Copy your Heroku URL
5. Go to the leap.js file and replace the host ('https://fox-hologram.herokuapp.com') with your own heroku
6. Plug the leap motion sensor to the laptop
7. Run `yarn run leap`
8. Visit your Heroku site on your mobile device
9. Place the prism on top of the mobile device
10. Rotate your hand on top of the sensor and the element in the scene should move

## How to Run it Locally??

-> There is no mobile device involved when testing locally.

1. Clone repo
2. Run `yarn install`
3. Plug the leap motion sensor to the laptop
4. Run `yarn run leap-local`
5. Open new tab in command line and run `yarn run server`
6. Visit 'localhost:3000' in your browser
7. Rotate your hand on top of the sensor and the element in the scene should move

### xoxo!
