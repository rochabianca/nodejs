var TinyEmitter = require('tiny-emitter');
var request = require('browser-request');

class NTask extends TinyEmitter {
  constructor() {
    super();
    this.request = Request;
    this.URL = "https://localhost:3001";
  }
}

module.exports = NTask;