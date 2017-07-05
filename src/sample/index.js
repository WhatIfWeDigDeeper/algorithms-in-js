const fp = require('lodash/fp');

var Mocha = require('mocha');
var assert = require('assert');
var mocha = new Mocha();

class Greeter {
 constructor(name) {
  this.name = name;
 }
  sayHi() {
    return `Hello, ${this.name}`;
  }

}

const sayHello = (greeting) => {
  const greeter = new Greeter(greeting);
  return greeter.sayHi();
  //return `Hello, ${greeting}`;
}

const mapInt = fp.map(parseInt);

const result = mapInt(['6', '8', '10']);
console.log(result);

// Bit of a hack, sorry!
mocha.suite.emit('pre-require', this, 'solution', mocha);

describe('FB CoderPad', function() {

  describe('Question #1', () => {
    it('should work', function() {
      assert.ok(sayHello('World') === 'Hello, World');
    });

    xit('should ', () => {

      assert.ok(false);
    })
  })

  describe('Question #2', () => {
    xit('should ', function() {
      assert.ok(false);
    });

    xit('should ', () => {

      assert.ok(false);
    })
  })
});

mocha.run();
