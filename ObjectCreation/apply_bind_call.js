'use strict';

var person = {
    name: "James Smith",
    hello: function (thing) {
        console.log(this.name + " says hello " + thing);
    }
}

person.hello("world");  // output: "James Smith says hello world"
person.hello.call({ name: "Jim Smith" }, "world"); // output: "Jim Smith says hello world"
person.hello.apply({ name: "John Smith" }, ["world"]); // output: "John Smith says hello world"

var helloFunc = person.hello.bind({ name: "Job Smith" }, "world");
helloFunc();  // output: Job Smith says hello world"
