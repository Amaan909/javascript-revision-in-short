//singleton->constructor objects
// const Obj=new Object();

//object literals->const Obj={}

const mySym=Symbol("key")

let myObj={
    name:"Amaan",//js takes name as a string "name"
    "full name":"Mohd Amaan",
    age:23,
    [mySym]:"myKey",//using predefined symbol in an object
    location:"Jhansi",
    employed:false,
    email:"amaan@gmail.com",
    favDish:["Bhindi","MangoShake"]
}
// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj["name"]);
// console.log(myObj["full name"]);//only this way,cant use .
// console.log(myObj.favDish);
// console.log(myObj);
// myObj.name="Mohammad"
// Object.freeze(myObj)//locks object
// myObj.name="ram"
// console.log(myObj.name);

myObj.greeting=function(){
    console.log("Hello");
}
myObj.greeting2=function(){
    console.log(`Hello ${this.name}`);//referencing myObj
}
// console.log(myObj.greeting());
// console.log(myObj.greeting2());
// console.log(myObj);



const regulerUser={
    email:"regular@reg.com",
    fullname:{//nested
        userfullname:{
            firstname:"Mohd",
            Lastname:"Amaan"
        }
    }
}
// console.log(regulerUser.fullname.userfullname);

//joining objects
const obj1={1:"a",2:"b"}
const obj2={2:"c",4:"d"}
// const obj3=Object.assign(obj1,obj2)//merges obj2 into obj1 and returns ouput object as obj3
// console.log(obj1);
// console.log(obj2);

// console.log(Object.assign(obj1,obj2));

// instead of merging into obj1 ,use {}
// const obj3=Object.assign({},obj1,obj2)

//or use spread
const obj3={...obj1,...obj2}
// console.log(obj3);

//values that come from database

const users=[//array of objects
    {
        id:1,
        name:"Amaan"
    },
    {},
    {}
]
// console.log(users[1].id);

// console.log(myObj);
// console.log(Object.keys(myObj));//array of keys
// console.log(Object.values(myObj));//array of values
// console.log(Object.entries(myObj));

//to check if property exist before working on it
// console.log(myObj.hasOwnProperty('education'));

const course={
    coursename:"Js",
    courseDay:"7"
}
const {courseDay:Day}=course//destructuring
console.log(Day);

//json api format,object having collection of name/value pairs