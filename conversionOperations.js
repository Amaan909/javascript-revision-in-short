let score="22"

//console.log(typeof score);//will give string

//we use conversions in backend of values received from frontend

let valueInNumber=Number(score)
//console.log(valueInNumber);//converted to number

let score2=12
let valueInString=String(score2)
// console.log(valueInString);

//if number is not oure string

let a="22abc"
let valueInNumber2=Number(a)
//console.log(valueInNumber2);//NaN,problem

//to number
/*
"22"->22
"22abc"->NaN
"null"->0
"true"->1
"noNumberString"->NaN
"udefined"->NaN

*/

//boolean conversion

let isValid=0//every number gives true except 0
let booleancheck=Boolean(isValid)
// console.log(booleancheck);
//empty string gives false

//    Operations

// console.log(2+2);
// console.log("2"+"2");
// console.log("2"+2+1);
// console.log(2+2+"1");
//inc and dec

// console.log(+false);

//comparisons

// console.log(2>2);
// console.log(2>=2);
// console.log(2<2);

// console.log("2">2);
// console.log("2"==2);
//console.log("2">=2);//implicit conversion happens
//console.log(2>="2");//comparisons should be between same data types to avoid unpredictable results

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
//equality is different than comparisons,comparison convert null to 0.

console.log(2==="2");//checks data type also,no conversion happens
