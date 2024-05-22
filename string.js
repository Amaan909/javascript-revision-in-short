let name="amaan"
let age=23
//console.log(`My name is ${name} and age ${age}`);//string interpolation
const randomVar=new String('Hello')//uses object with key value pair
//console.log(randomVar[0]);

// console.log(randomVar.length);
//we can access prototypes like
// console.log(randomVar.toUpperCase());

//check various prototypes on string

const url="https://google.com/bird%20images"//spaces are replaced by %20 by browser
console.log(url);
console.log(url.replace('%20','-'));