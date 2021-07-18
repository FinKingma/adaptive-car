// var AdaptiveCC = require('./adaptiveCC')

function Car () {
  this.speed = 0
  this.pos = 0
  this.carInFront = undefined
  this.originalSpeed = undefined
  this.CruiseControlAdjustment = false

  this.updatePos = () => {
    this.pos += this.speed
  }

  this.setPosition = (pos) => {
    this.pos = pos
  }

  this.setSpeed = (speed) => {
    this.speed = parseInt(speed)
  }

  this.trackCar = (car) => {
    this.carInFront = car
  }

  this.racing = setInterval(() => {
    this.updatePos()
  }, 25)
}

module.exports = Car
