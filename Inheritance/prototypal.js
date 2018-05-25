'use strict';

var cat = {
    name: 'Fluffy',
    color: 'White',
    details: function () {
        console.log(this.name + ' is a ' + this.color + ' cat');
    }
};

cat.details();

var anothercat = Object.create(cat);

anothercat.name = 'Derpy';
anothercat.color = 'Cyan';

anothercat.details();

var yetanothercat = Object.create(anothercat);

yetanothercat.name = 'Larpy';

yetanothercat.details = function(){
    console.log('Calling Elvis...');
    cat.details.call(this);
};

yetanothercat.details();