'use strict';

var cat = {
    name: 'Fluffy',
    color: 'White',
    speak: function () {
        console.log('Meow!');
    }
};

console.log(cat);

cat.age = 3;

console.log(cat);

cat.fight = function () {
    console.log('MrreeoowwwWWW!!');
};

console.log(cat);

cat.speak();

cat.fight();