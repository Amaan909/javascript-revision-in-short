let myArr=[1,2,3,4,5]
//arrays are object,resizable and can use multiple data type elements in same array
let myArr2=[1,2,"Hello","World",true]
// console.log(myArr2);
//Methods
myArr.push(6);//at end
// console.log(myArr);
// console.log(myArr[4]);
myArr.pop()//from end
// console.log(myArr);

// myArr.unshift(0);//push at first,shift all n-1 elements to right
// myArr.shift()//pop from start
// console.log(typeof myArr);

// console.log(myArr.includes(1));//boolean
// console.log(myArr.indexOf(1));

const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);//turns into string

// console.log("A ",myArr);
const a1=myArr.slice(1,3)//excludes 3
// console.log(a1);

// console.log("B ",myArr);
const a2=myArr.splice(1,3);//inlcudes 3
// console.log(a2);

// console.log("C ",myArr);//array is changed due to splice use


const arr1=[1,2,3]
const arr2=[4,5,6]
// arr1.push(arr2)//pushed arr2 in arr1 as an element
// console.log(arr1);

const joined1=arr1.concat(arr2)//new array formed with 6 elements
// console.log(joined1);

//spread operator ... works as concat

const joined2=[...arr1,...arr2]
// console.log(joined2);

const another_arr=[1,2,[3,4],5,[6,[7,8,[9,10]]]]
//to spread
const spread_arr=another_arr.flat(Infinity)
// console.log(spread_arr);

//to convert to Array
console.log(Array.isArray("Amaan"));//false
console.log(Array.from("Amaan"));//converts in array
console.log(Array.from({name:"Amaan"}));//interesting

const a=1
const b=2
const c=3

console.log(Array.of(a,b,c));
