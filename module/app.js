import {add, multiply} from './math.js';    //alias 안됨 //같은 폴더

// console.log(add(2,3));
// console.log(multiply(2, 3));
// console.log(add("BTS ","RM"));

// import greet from './greet.js';
// console.log(greet('RM'));

import getUserName, {age, getTest} from './user.js';    //export default 는 별도로 표시 
console.log(getUserName());
console.log(age);
console.log(getTest());