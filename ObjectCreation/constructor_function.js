//'use strict';

function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.speak = function () {
        console.log('Meow!');
    }
}

var cat = new Cat('Fluffy', 'White');

console.log(cat);

cat.speak();

var nocat = Cat('Derpy', 'Cyan'); // With strict mode, throws error 'name' is undefined
// Without strict mode the 'this' will be the global object

console.log(nocat);

console.log(global.color); // On the browser this will set color in window object