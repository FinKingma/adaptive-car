const { Given, When, Then } = require('@cucumber/cucumber')
var assert = require('chai').assert
var Car = require('../../src/modules/car.js')

Given('John drives at {int} mph', function (speed) {
  this.John = new Car()
  this.John.setSpeed(+speed)
})

Given('William drives at {int} mph', function (speed) {
  this.William = new Car()
  this.William.setSpeed(+speed)
})

When('William nears John', function () {
  this.William.trackCar(this.John)
  this.William.CruiseControlAdjustment = true
})

Then('Williams car will adjust its speed to {int} mph', function (expectedSpeed) {
  this.clock.tick(2000)
  assert(this.William.speed == expectedSpeed, 'Williams car does not drive with expected speed')
})

Given('Johns is at the {int}m marker', function (pos) {
  this.John = new Car()
  this.John.setPosition(+pos)
})

When('William is approaching John at the {int}m marker', function (pos) {
  this.William = new Car()
  this.William.setPosition(+pos)
  this.William.trackCar(this.John)
})

Then('Williams cruise control adjustment is activated', function () {
  this.clock.tick(1000)
  assert(this.William.CruiseControlAdjustment === true, 'Williams cruise control adjustment is not active')
})

Given('William nears John at {int} mph', function (speed) {
  this.William = new Car()
  this.William.setSpeed(+speed)
  this.William.trackCar(this.John)

  this.clock.tick(2000)
  assert(this.William.speed === 60, 'Williams car does not slow down  as expected')
})

Given('John speeds up to {int} mph', function (speed) {
  this.John.setSpeed(speed)
})

Then('Williams car will adjust its speed back to {int} mph', function (speed) {
  this.clock.tick(2000)
  assert(this.William.speed === speed, 'Williams car does not speed up as expected')
})
