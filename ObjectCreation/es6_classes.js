'use strict';

class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.speak = function () {
            console.log('Meow!');
        }
    }

    fight() {
        console.log('MrrreeooowwwwWWW!');
    }
}

var cat = new Cat('Fluffy', 'White');

console.log(cat);

cat.speak();

cat.fight();