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
