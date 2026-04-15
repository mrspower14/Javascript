// //1. 비동기 프로그램 
// console.log('1번');
// setTimeout(() => console.log('2번'), 1000);
// console.log('3번');

// function sayHello(name) {
//     console.log(`안녕하세요. ${name} ========================`);
// }

// function asyncTest(name, callback) {
//     console.log('타이머 시작');
//     setTimeout(() => callback(name), 3000);
// }

// function doOtherthing() {
//     for (let i = 0; i < 300; i++) {
//         console.log(`${i+1} 번째 처리`);
//     }
// }

// asyncTest('뷔', sayHello);
// doOtherthing();

// //2.callback 지옥 
// const DB = [];

// function save2DB(user, callback) {
//     DB.push(user);
//     console.log(`${user.name}님 데이터베이스에 저장 완료되었습니다.`);
//     return callback(user);
// }

// function sendEmail(user, callback) {
//     console.log(`${user.email}으로 이메일이 전송 완료되었습니다.`);
//     return callback(user);
// }

// function getResult(user){
//     return `${user.name}님 회원가입에 성공했습니다.`;
// }

// function register(user) {
//     return save2DB(user, (user) => {
//         return sendEmail(user, (user) => {
//             return getResult(user);
//         });
//     });
// }

// const result = register({name: '손흥민', email: 'son@naver.com'});
// console.log(result);

// //3. Promise. //pending(초기), fulfilled(성공)), rejected(실패)
// const promise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve('작업 성공!');
//     } else {
//         reject('작업 실패!');
//     }
// });

// promise.then((result) => console.log('성공 결과:', result))
//        .catch((error) => console.error('실패 결과:', error));


// const promise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve('작업 성공!');
//     } else {
//         reject('작업 실패!');
//     }
// });

// promise.then(console.log)
//        .catch(console.error);

// const p = new Promise((resolve) => {     //선언할때 실행 
//     console.log('1. Promise 실행');
//     resolve(10);
// });
// console.log('2. 코드 계속 실행');
// p.then((num) => console.log('3. then 실행: ', num));

// //4.Promise 체이닝 (Promise 를 반환한다.)
// const p1 = new Promise((resolve) => {
//     const result = 10;
//     resolve(result);
// });

// const p2 = p1.then((num) => num + 1);
// p2.then((num) => console.log(num));         //11

// const p3 = p1.then((num) => num + 1).then((num) => num + 3).then((num) => console.log(num));    //14

// const p1 = new Promise((resolve) => {
//     const result = 10;
//     resolve(result);
// });

// const p2 = p1.then((num) => num + 1);
// p2.then(console.log).then(console.log);   //undefined
// //p2.then(console.log).then((num) => num + 1).then(console.log);

// //const p3 = p1.then((num) => num + 2).then(console.log);

// //5. 즉시 성공 Promise 
// new Promise((resolve) => {
//     resolve(10);
// });

// Promise.resolve(11);

// function getData() {
//     return Promise.resolve('데이타');
// }

// getData().then(console.log);    //데이타

// Promise.resolve(10)
//        .then((n) => n+1)
//        .then(console.log);

// //6.즉시 실패 Promise
// Promise.reject('에러').catch(console.log);

// function checkAge(age) {
//     if (age < 18) {
//         return Promise.reject('미성년자');
//     } else {
//         return Promise.resolve('통과');
//     }
// }
// checkAge(17).then(console.log).catch(console.log);  //미성년자 

//7.async/await
async function func1(){     //async 키워드가 붙은 함수는 Promise로 감싸서 반환 func1 = func2 
    return 'hello1';
}
func1().then(console.log);

function func2(){
    return new Promise((resolve) => {
        resolve('hello2');
    })
}
func2().then(console.log);

console.log('1');
async function func3() {
    let name = await func1();
    console.log(name);
}
func3();