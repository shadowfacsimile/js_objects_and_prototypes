'use strict';

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.details = function () {
    console.log(this.name + ' is a ' + this.color + ' cat');
};

var cat = new Cat('Fluffy', 'White');
cat.details();

function AnotherCat(name, color) {
    Cat.call(this, name, color);
}

AnotherCat.prototype = Object.create(Cat.prototype);

AnotherCat.details = function () {
    console.log('Calling Elvis...');
    Cat.prototype.details.call(this);
}

var anothercat = new AnotherCat('Derpy', 'Cyan');
anothercat.details();

console.log(anothercat instanceof Cat);