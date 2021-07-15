const { setWorldConstructor } = require('@cucumber/cucumber')
var sinon = require('sinon')

class CustomWorld {
  constructor () {
    // needed so `attach`, `log` and `parameters` are properly set
    this.clock = sinon.useFakeTimers()
  }
}

setWorldConstructor(CustomWorld)
