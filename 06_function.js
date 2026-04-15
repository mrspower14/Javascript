function sayHello(){
    console.log('Hello');
}
// sayHello();
// sayHello1('World 정의 전!');

// function sayHello1(name) {
//     console.log(`Hello1 ${name}`);
// }

// sayHello();

// sayHello1();
// sayHello1('');
// sayHello1('World! 정의 후');
// sayHello1(1);

// function multiple(dan) {
//     console.log(`** ${dan} 단 **`);
//     for (let loop = 1; loop < 10; loop++ ) {
//         console.log(`${dan} * ${loop} = ${dan * loop}`);
//     }
// }

// for (let i = 2; i < 10; i++) {
//     multiple(i);
//     console.log('');
// }

// function sayHello2(name) {
//     return `Hello ${name}`;
// }
// let greeting = sayHello2('RM');
// console.log(greeting);
// console.log(sayHello2('morning'));

// function add(num1, num2) {
//     return num1 + num2;
// }
// let result = add(5,4);
// console.log(result);


// function sayHello3(name) {
//     console.log('함수시작');
//     return;
//     console.log('함수안됨');
// }
// let greeting = sayHello3('RM');
// console.log(greeting);

// function getGrade(score) {
//     let grade;
//     if (score >= 90) {
//         grade = 'A';
//     } else if (score >= 80) {
//         grade = 'B';
//     } else if (score >= 70) {
//         grade = 'C';
//     } else if (score >= 60) {
//         grade = 'D';
//     } else {
//         grade = 'F';
//     }
//     return grade;
// }

// console.log(`100 점은 ${getGrade(100)} 입니다.`);
// console.log(`99 점은 ${getGrade(99)} 입니다.`);
// console.log(`89 점은 ${getGrade(89)} 입니다.`);
// console.log(`79 점은 ${getGrade(79)} 입니다.`);
// console.log(`69 점은 ${getGrade(69)} 입니다.`);
// console.log(`59 점은 ${getGrade(59)} 입니다.`);
// console.log(`-1 점은 ${getGrade(-1)} 입니다.`);

function calc(num1, op, num2) {
    let rtn;
    switch(op) {
        case '+':
            rtn = num1 + num2;
            break;
        case '-':
            rtn = num1 - num2;
            break;
        case '*':
            rtn = num1 * num2;
            break;
        case '/':
            rtn = num1 / num2;
            break;
        case '%':
            rtn = num1 % num2;
            break;    
        default:
            rtn = undefined;
    }
    return rtn;
}

// console.log(`10 + 2 = ${calc(10, '+', 2)}`);
// console.log(`10 - 2 = ${calc(10, '-', 2)}`);
// console.log(`10 * 2 = ${calc(10, '*', 2)}`);
// console.log(`10 / 2 = ${calc(10, '/', 2)}`);
// console.log(`10 % 3 = ${calc(10, '%', 3)}`);
// console.log(`10 @ 3 = ${calc(10, '@', 3)}`);

//함수의 할당 
// const calculator = calc;
// console.log(calculator(2, '+', 3));

// const sayHello4 = sayHello;
// sayHello4();
// sayHello();

//함수형 매개변수   //함수를 매개변수로 전달할 수 있다.
// function sayHello(name){
//     console.log(`Hello ${name}`);
// }
// function sayHi(name) {
//     console.log(`Hi ${name}`);
// }
// function greet(name, callback) {
//     console.log(name);
//     callback(name);
// }

// greet('깐부', sayHi);
// greet('선생님', sayHello);

function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
function calc2(num1, num2, callback) {
    return callback(num1, num2);
}

// console.log(`10 + 2 = ${calc2(10, 2, add)}`);
// console.log(`10 - 2 = ${calc2(10, 2, sub)}`);
// console.log(`10 * 2 = ${calc2(10, 2, mul)}`);
// console.log(`10 / 2 = ${calc2(10, 2, div)}`);
// console.log(`10 / 3 = ${calc2(10, 3, div)}`);

// //함수 선언문 
// function add1(n1, n2) {
//     return n1 + n2;
// }
// console.log(add1(10, 5));

// //함수 표현식 //익명함수 
// let add2 = function (n1, n2) {
//     return n1 + n2;
// }
// console.log(add2(10, 5));

// //화살표 함수
// let add3 = (n1, n2) => {
//     return n1 + n2;
// }
// console.log(add3(10, 5));

// const sayHi1 = () => {
//     console.log('Hi');
// }
// sayHi1();

// //많이 쓰이는 화살표 함수 방법  
// let add4 = (a, b) => a + b;
// console.log(add4(10,5));

// const getUser = () => ({name:'son'});

// // 매개변수로써 화살표함수
// function greet1(name, callback) {
//     return callback(name);
// }

// let result1;
// result1 = greet1('선생님', (name) => {
//     return `Hello ${name}`;
// });
// console.log(result1);

// result1 = greet1('깐부', (name) => `Hi ${name}`);
// console.log(result1);

// callback 실습 
// function calc2(num1, num2, callback) {
//     return callback(num1, num2);
// }

console.log ('화살표 함수');
let result = calc2(10, 2, (num1, num2) => num1 + num2);
console.log(`10 + 2 = ${result}`);
result = calc2(10, 2, (num1, num2) => num1 - num2);
console.log(`10 - 2 = ${result}`);
result = calc2(10, 2, (num1, num2) => num1 * num2);
console.log(`10 * 2 = ${result}`);
result = calc2(10, 2, (num1, num2) => num1 / num2);
console.log(`10 / 2 = ${result}`);

console.log ('함수 표현식');
result = calc2(10, 2, function (n1, n2) { return n1 + n2});
console.log(`10 + 2 = ${result}`);
result = calc2(10, 2, function (n1, n2) { return n1 - n2});
console.log(`10 - 2 = ${result}`);
result = calc2(10, 2, function (n1, n2) { return n1 * n2});
console.log(`10 * 2 = ${result}`);
result = calc2(10, 2, function (n1, n2) { return n1 / n2});
console.log(`10 / 2 = ${result}`);

