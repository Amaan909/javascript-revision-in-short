let d=new Date();//Date is an object
// console.log(d);
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toISOString());
// console.log(d.toUTCString());

let myDate=new Date(2000,8,8,8,8,8);//year,month(starting from 0),day,hour,min,sec
// console.log(myDate.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);//date in millisecond time since jan1,1970
//convert in sec
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));
let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
