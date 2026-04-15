// //1. 단축평가 
// console.log(true && 'hello');       //&& 조건 뒷값이 반환
// console.log(false && 'hello');      //&& 조건 false 반환

// console.log(true || 'hello');       //|| 조건 true 반환
// console.log(false || 'hello');      //|| 조건 뒷값이 반환 

// let userName = '';
// let displayName = userName || 'Guest'; //userName이 false 임 'Guest' 반환 
// console.log(displayName);

// userName = 'Wizard';
// displayName = userName || 'Guest';     //userName이 true 임 'Wizard' 반환 
// console.log(displayName);

// let isLoggedIn = true;
// let userProfile = {name:'Alice'};
// isLoggedIn && console.log(userProfile.name);    //Alice 출력

// isLoggedIn = false;
// isLoggedIn && console.log(userProfile.name);    //출력 없음 

// //2.NULL 병합 연산자 
// const name1 = null ?? 'Guest';          //Guest
// console.log(name1)

// const name2 = undefined ?? 'Guest';     //Guest
// console.log(name2);

// const name3 = "RM" ?? 'Guest';          //RM
// console.log(name3);

// const name4 = "" || "Guest";            //Guest
// console.log(name4);

// const name5 = "" ?? "Guest";            //출력없음 
// console.log(name5);

// //3. 객체 분해
// const user = {
//     name: 'RM',
//     age : 30
// };

// const name1 = user.name;
// const age1 = user.age;
// console.log(name1);
// console.log(age1);

// const {name, age} = user;
// console.log(name);
// console.log(age);

// const {name: userName, age: userAge} = user;
// console.log(userName);
// console.log(userAge);

// user.age =  10;
// const {name: userName1, age: userAge1} = user;
// console.log(userName1);
// console.log(userAge1);
// //userAge1 = 20;        //오류  Assignment to constant variable
// console.log(user);

// //4. 객체 분해-객체 매개 변수
// function userInfo(user) {
//     console.log(`${user.name} - ${user.age}`);
// }
// userInfo({name: 'RM', age: 30});

// function printUser({name, age}) {
//     console.log(`${name} - ${age}`);
// }
// printUser({name:'RM', age: 30});

// //5.Spread 연산자 - 펼쳐주는놈
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// const arr3 = arr1;
// arr1.push(4);
// console.log(arr1);  //1,2,3,4
// console.log(arr2);  //1,2,3
// console.log(arr3);  //1,2,3,4

// const person = {name: 'RM', age: 20};
// const copy = {...person};
// console.log(copy);

// const user = {name:'손흥민', age: 20};
// const newUser = {...user, age: 21};
// user.age = 30;
// //console.log(user);
// console.log(newUser);

// //6.Rest 매개변수 - 모아주는놈 
// function sum(...nums) {
//     console.log(nums);
// }
// sum(1,2,3,4,5);

// function sum1(num1, num2, ...nums) { //Rest 매개변수는 반드시 마지막에 위치해야 한다.
//     console.log(num1);
//     console.log(num2);
//     console.log(nums);
// }
// sum1(1,2,3,4,5);

// //7.문자열 조작
// const str = 'JavaScript';
// console.log(str.length);                //길이                  //10
// console.log(str.toUpperCase());         //대문자                 //JAVASCRIPT
// console.log(str.toLowerCase());         //소문자                 //javascript
// console.log(str.includes('script'));    //포함여부 (대소문자 구분)   //false
// console.log(str.includes('Java'));      //포함여부 (대소문자 구분)   //true
// console.log(str.startsWith('java'));    //시작문자열 여부          //false  
// console.log(str.endsWith('Script'));    //종료문자열 여부          //true
// console.log(str.indexOf('a'));          //찾는 인덱스             //1
// console.log(str.indexOf('z'));          //찾는 인덱스             //-1
// console.log(str.slice(0,4));            //문자자르기              //Java
// console.log(str.slice(4));              //문자자르기              //Script
// console.log(str.replace('Script', 'script')); //변환            //Javascript

// const str1 = 'a,b,c';
// const arr = str1.split(',');        
// console.log(arr);   //array
// 
// const str2 = '   hello  ';
// console.log(str2.trim());   
// 
// const str3 = 'ha';
// console.log(str3.repeat(3));    //hahaha
// 
// const str4 = 'hello';
// console.log(str4.charAt(1));    //e

// //8.try-catch
// try{
//     console.log(a);
// } catch(err) {
//     console.log('에러 발생!');
//     console.log(err);
// }

// try{
//     console.log('실행');
// } catch(e) {
//     console.log('에러');
// } finally {
//     console.log('무조건 실행');
// }

// try{
//     throw new Error('문제 발생');
// } catch(error) {
//     console.log(error.message);
// }

// function checkAge(age) {
//     if (age < 18) {
//         throw new Error('미성년자');
//     }
//     return '통과';
// }

// try {
//     let test = checkAge(15);
//     console.log(test);
// } catch (error) {
//     console.log(error.message);
// }

//9.Module 모듈 : 코드를 파일단위로 나누고 필요한 것만 가져다 쓰는 구조 
//               frontend : ES 방식 (import 방식) ** (React.js)
//               backend : CommonJS 방식 (require 방식) (node.js)


