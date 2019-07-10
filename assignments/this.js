/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding: if the this keyword is in the global scope then it will call the window.
* 2. implicit binding: when calling a function whatever is left of the '.this' is where this will call from.
* 3. New binding: the new keyword creates a new object and this will point to the new object.
* 4. Explicit Binding: when caling a function you can use .call , .apply , or .bind to point to the specific object you want this to call from.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function Kitty(color) {
    console.log('what a cute ' + color + ' kitty!');
    console.log(this);
  }
  
  Kitty(brown);
  
// Principle 2

// code example for Implicit Binding
let helloKitty = {
    greeting: 'Hello ',
    speak: function(catsName) {
        console.log(this.greeting + catsName);
        console.log(this);
    }
}

helloKitty.speak('Professor Fluffington');

// Principle 3

// code example for New Binding
function Cat(name, color, breed, meow) {
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.meow = meow;
    this.introduction = function(){
        console.log('My name is ' + this.name +'.' + 'I am a ' + this.color + this.breed + this.meow)
    };
}

let pinkyCat = new Cat('Pinky','pink','sphynx','meeeoooww!');
let GeorgeCat = new Cat('George','brown','mainecoon','nya!');

pinkyCat();
GeorgeCat();
// Principle 4

// code example for Explicit Binding
function Cats() {
    console.log(this.hi);
}
let myCat = {
    name: 'Johnny',
    hi: `Hi I'm ${this.name}`,
}

Cats.call(myCat);