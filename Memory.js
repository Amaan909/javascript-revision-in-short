//primitive data types:string ,number,null,undefined,symbol use stack memory
//Non-primitive data types :object,function,arrat use heap data types

//primitive - copy
//non-primitive-use reference

let name="amaan"
let anothername=name//anothername uses a copy of name
anothername="Ram"//anothername uses copy of name,thus name wont change
// console.log(name);
// console.log(anothername);

let user1={
    email:"amaan@gmail.com",
    age:23,
}
let user2=user1
//user1 and user2 both point at at same reference in heap

user2.email="sid@s.com"//original reference is changed

// console.log(user1.email);
// console.log(user2.email);

let person = {
    name: "James",
    age: 23,
    isMale: true,
};
console.log(person);


let newPerson = person;
newPerson.isMale = false;
console.log(person);