let num1 = 5;
let num2 = 3;
let num3 = 2;

// console.log(num1);
// console.log(num2);
// console.log(-num1);
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);


// console.log(123 == 123);    //true
// console.log(123 == '123');  //true
// console.log(123 === '123'); //false
// console.log(123 === 123);   //true

// console.log(123 != 123);    //false
// console.log(123 != '123');  //false
// console.log(123 !== '123'); //true
// console.log(123 !== 123);   //false

// num1 = 5;
// num2 = 3;
// num3 = 2;
// console.log(num1 > num2 && num2 > num3);  //true
// console.log(num1 == num2 && num1 > num2); //false
// console.log(num1 == num2 || num1 > num2); //true

// console.log(num1 - num2 > num2 - num3 && num2 == 0); //false
// console.log(num1 + num2 > num3 || num3 > 0);         //true

// let num = 0;
// console.log(num); //0
// num++;
// console.log(num); //1
// num--;
// console.log(num); //0

// num = 1;
// console.log(num++); //1
// num = 1;
// console.log(++num); //2
// num1 = num++;
// console.log(num1);  //2 
// console.log(num);   //3


// const age = 20;
// const result = age > 19 ? '당신은 성인입니다.' : '당신은 미성년자입니다.';
// console.log(result);

//연산자 우선순위 
let a = 2;
let b = 3;
let result = a + (b * 4) /  5;
console.log(result);   //4.4
result = ((a + b) * 4) / 5;
console.log(result);   //4
result = a++ + b * 4;
console.log(result);   //14
console.log(a);        //3