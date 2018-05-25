'use strict';

var cat = {
    constructor: function (name, color) {
        this.name = name;
        this.color = color;
    },
    details: function () {
        console.log(this.name + ' is a ' + this.color + ' cat');
    }
};

cat.constructor('Fluffy', 'White');

cat.details();

var anothercat = Object.create(cat);
anothercat.constructor('Derpy', 'Cyan');

anothercat.details();

var yetanothercat = Object.create(anothercat);
yetanothercat.constructor('Larpy', 'Green');
yetanothercat.details = function () {
    console.log('Calling Elvis...');
    cat.details.call(this);
};

yetanothercat.details();