'use strict';

function createCat(name, color) {
    return {
        name,
        color,
        speak: function () {
            console.log('Meow!');
        }
    };
}

var cat = createCat('Fluffy', 'White');

console.log(cat);

cat.speak();