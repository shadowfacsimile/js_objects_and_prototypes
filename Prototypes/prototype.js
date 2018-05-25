'use strict';

function foo() {

}

console.log('foo -> ' + foo);

console.log('foo.prototype -> ' + foo.prototype);

console.log('foo.prototype.prototype -> ' + foo.prototype.prototype);

console.log('foo.__proto__ -> ' + foo.__proto__);

var newfoo = new foo();

console.log('newfoo -> ' + newfoo);

console.log('newfoo.prototype -> ' + newfoo.prototype);

console.log('newfoo.__proto__ -> ' + newfoo.__proto__);

console.log('newfoo.__proto__ === foo.prototype -> ' + foo.prototype === newfoo.__proto__);

foo.prototype.test = 'derp';

console.log('newfoo.__proto__.test -> ' + newfoo.__proto__.test);

var obj = { };

console.log('obj -> ' + obj);

console.log('obj.prototype -> ' + obj.prototype);