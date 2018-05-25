'use strict';

var cat = Object.create(Object.prototype,
    {
        name: {
            writable: true,
            configurable: true,
            enumerable: true,
            value: 'Fluffy'
        },
        color: {
            writable: false,
            configurable: true,
            enumerable: false,
            value: 'White'
        },
        speak: {
            value: function () {
                console.log('Meow!');
            }
        }
    });

console.log(cat); // Will not print color because not enumerable

console.log(cat.color);

cat.speak();

cat.name = 'Derpy';
//cat.color = 'Cyan'; throws error in strict mode

console.log(cat.name);

for (var key in cat) {
    console.log(key + ' -> ' + cat[key]);
}

console.log(Object.keys(cat));

var anothercat = {
    name: { first: 'Derpy', last: 'Constipi' },
    color: 'Cyan'
};

Object.defineProperty(anothercat, 'name', { writable: false, enumerable: false });

console.log(anothercat);

console.log(anothercat.name);

anothercat.name.first = 'Larpy';

console.log(anothercat.name);

Object.freeze(anothercat.name);

//anothercat.name.first = 'Zerpy'; Cannot assign to read only property 'first' of object '#<Object>'

var yetanothercat = {
    name: { first: 'Larpy', last: 'Senstipi' },
    color: 'Green'
};

console.log(yetanothercat);

Object.defineProperty(yetanothercat, 'fullname', {
    get() {
        return yetanothercat.name.first + ' ' + yetanothercat.name.last;
    },

    set(fullname) {
        yetanothercat.name.first = fullname[0];
        yetanothercat.name.last = fullname[1];
    }
});

console.log(yetanothercat.fullname);

yetanothercat.fullname = ['Zerb', 'Nierbe'];

console.log(yetanothercat.fullname);