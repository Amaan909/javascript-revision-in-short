const user={
    username:"amaan",
    age:23,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome`);
        console.log(this);
    }
}
//this refers to current context of the scope(object)
// user.welcomeMessage();
// user.username="Ash"
// user.welcomeMessage()

// console.log(this);//gives empty object,as there is no global context
//this,in browser give window as a global context

function testthis(){
    name:"amaan",
    console.log(this.name);//undefined
}
//cant use this in a function
// testthis()

//arrow functions

// const add=(a,b)=>{
//     return a+b;
// }

// const add=(a,b)=>a+b//implicit return in case of one line code

const add=()=>({user:"amaan"})//return object
// console.log(add())

//Immediately Invoked Function Expression(IIFE)

(function Name(){
    console.log("IIFE");
})()