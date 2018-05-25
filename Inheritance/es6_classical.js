'use strict';

class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    details() {
        console.log(this.name + ' is a ' + this.color + ' cat');
    }
}

var cat = new Cat('Fluffy', 'White');
cat.details();

class AnotherCat extends Cat {
    constructor(name, color) {
        super(name, color);
    }

    details() {
        console.log('Calling Elvis...');
        super.details();
    }
}

var anothercat = new AnotherCat('Derpy', 'Cyan');
anothercat.details();

console.log(anothercat instanceof Cat);