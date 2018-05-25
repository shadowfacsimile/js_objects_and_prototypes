'use strict';

var cat = { name: 'Fluffy', color: 'White' };

cat['Eye color'] = 'Green';

console.log(cat);

console.log(cat['Eye color']);

console.log(Object.getOwnPropertyDescriptor(cat, 'name'));