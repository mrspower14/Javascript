// // 1.Array 선언
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(numbers[0]);

// console.log(numbers.length);

// numbers[3] = -4;
// numbers[5] = 6;
// console.log(numbers.length, numbers);

// numbers[8] = 7;
// console.log(numbers.length, numbers);

// delete numbers[1];
// console.log(numbers.length, numbers);

// let array = new Array(2);
// console.log(array);

// array = new Array(1, 2, 3, 4, 5);
// console.log(array);

// // 2.Array 활용
// let bts1 = ['진', '슈가', '제이홉', 'RM'];
// console.log(bts1);
// let bts2 = new Array('지민', '뷔', '정국');
// console.log(bts2);
// console.log('');
// // console.log(bts1.indexOf('슈가'));
// // console.log(bts2.indexOf('슈가'));
// // console.log(bts1.includes('RM'));
// // console.log(bts2.includes('RM'));

// bts1.push('박보검');         //맨뒤에 추가
// console.log(bts1);
// console.log(bts1.length);
// bts1.unshift('이도현');      //맨앞에 추가
// console.log(bts1);
// console.log(bts1.length);

// let first = bts1.shift();   //첫번째 아이템 삭제
// console.log(bts1);
// console.log(first);
// let last = bts1.pop();      //마지막 아이템 삭제
// console.log(bts1);
// console.log(last);

// // bts1.splice(1, 0, '박보검', '이도현');  //특정 index에서 추가 (index, 0, item, item)
// // console.log(bts1);

// // const deleted = bts1.splice(1, 2);  //특정 index에서 count만큼 삭제 (index, count)
// // console.log(bts1);
// // console.log(deleted);

// // let bts3 = bts1.slice(1, 3); //1,2 번째 배열값 가져오기. 세번째 값 미포함
// // console.log(bts3);
// // console.log(bts1);

// // bts3 = bts1.slice(-1); //뒤에서 하나 가져오기
// // console.log(bts3);
// // bts3 = bts1.slice(-2); //뒤에서 3개 가져오기
// // console.log(bts3);

// // const bts = bts1.concat(bts2);  //배열합치기
// // console.log(bts);

// // const rbts = bts.reverse();     //역순
// // console.log(rbts);
// // console.log(bts);

// // let members = bts.reverse().join(', ');   //문자열로 보여주기 //진, 슈가, 제이홉...
// // console.log(members);

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'banana'];
// fruits.sort();          //'Apple', 'Banana', 'Mango', 'Orange', 'banana'
// console.log(fruits);

// const numbers = [40, 100, 1, 5, 25, 10];
// console.log(numbers);

// numbers.sort();         //문자로 인식하여 소트 1, 10, 100, 25, 40, 5
// console.log(numbers);

// // 오름차순 정렬 n1-n2 > 0 이면 자리바꿈 1, 5, 10, 25, 40, 100
// numbers.sort(function(n1, n2) {return n1 - n2});
// console.log(numbers);
// // 내림차순 정렬
// numbers.sort((n1, n2) => n2 - n1);
// console.log(numbers);

// const items = [
//     {name: 'Apple',  price: 50},
//     {name: 'Banana', price: 10},
//     {name: 'Mango',  price:30}
// ];
// console.log(items);

// //items의 가격기준 오름차순
// items.sort((a, b) => a.price - b.price);
// console.log(items);
// //items의 가격기준 내림차순
// items.sort((a, b) => b.price - a.price);
// console.log(items);
// //items의 이름기준 오름차순
// items.sort((n1, n2) => n1.name.localeCompare(n2.name));
// console.log(items);
// //items의 이름기준 내림차순
// items.sort((n1, n2) => n2.name.localeCompare(n1.name));
// console.log(items);

// const bts = ['RM', '진', '슈가', '제이홉', '지민', '뷔', '정국'];
// for (let i = 0; i < bts.length; i++) {
//     console.log(i + ':' + bts[i]);
// }

// for (let member of bts){
//     console.log(member);
// }

// bts.forEach((member, index, array) => {
//     console.log(`전체 ${array.length}명 중에 ${index+1} 번째 멤버 ${member} 입니다.`);
//     //array 에는 bts 배열값이 전부 넘어온다.
// })

// // Quiz
// const list = ['슈가','차은우','박서준','이도현','제이홉','주우재','지민'];
// const bts = ['진', '슈가', '제이홉', 'RM', '지민', '뷔', '정국'];
// const btsMember = [];
// //for문 사용
// for (let member of list) {
//     if (bts.includes(member)) {
//         btsMember.push(member);
//     }
// }
// console.log(btsMember);
// const btsMemberStr = btsMember.join(', ');
// console.log(btsMemberStr);

// //filter 사용
// const btsMemberFilter = list.filter((mem) => bts.includes(mem));
// console.log(btsMemberFilter);
// console.log(btsMemberFilter.join(' : '));

// // map() 함수
// const nums = [1, 2, 3, 4, 5];
// const doubled = nums.map((num) => {
//     return num * 2;
// });
// console.log('map() double값 표현: ' + doubled);

// // filter() 함수
// const evenNumbers = nums.filter((num) => num % 2 === 0);
// console.log('filter() 2의 배수 걸러내기: ' + evenNumbers);

// //reduce() 함수
// const sum = nums.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
// console.log('합계 구하기 :' + sum);

// // Quiz 1~10까지의 숫자 중에 3의 배수를 고르고 2배한 후 합을 구하기.
// const numsTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numResult = numsTest.filter((num) => num % 3 === 0)
//                           .map((num) => num * 2)
//                           .reduce((acc, cur) => acc + cur, 0);
// console.log(numResult); //36

// const set = new Set([1, 2, 3, 4, 5]); //중복허용 안함
// console.log(set); //Set(5) { 1, 2, 3, 4, 5 }
// console.log(set.size);

// set.add(6);
// console.log(set);
// set.add(6);
// console.log(set);

// const setEmpty1 = new Set([]);
// const setEmpty2 = new Set();
// console.log(setEmpty1);
// console.log(setEmpty2);
// if (setEmpty1 === setEmpty2) {
//   console.log("같다");
// } else {
//   console.log("다르다");
// }

// console.log(set.has(3));
// console.log(set.has(6));

// set.delete(6);
// console.log(set);

// set.clear();
// console.log(set);

// set.forEach((item) => console.log(item));

// for (const value of set.values()) { //values() 없어도 값 잘 나온다.
//   console.log(value);
// }

// console.log(Math.abs(-10)); //절대값    //10
// console.log(Math.ceil(1.4)); //올림    //2
// console.log(Math.floor(1.4)); //버림.  //1
// console.log(Math.round(1.49)); //반올림 //1
// console.log(Math.round(1.5)); //반올림. //2
// console.log(Math.trunc(1.56546)); //소숫점 버림 //1
// console.log(Math.random()); //0~1 사이 랜덤.  //0<=실수<1   //0.379792749374
// console.log(Math.floor(Math.random() * 100) + 1);

// console.log(Math.floor(-1.6)); //-2
// console.log(Math.round(-1.6)); //-2
// console.log(Math.round(-1.5)); //-1
// console.log(Math.round(-1.4)); //-1
// console.log(Math.trunc(-1.6)); //-1


// Quiz 로또 번호 생성기 
function calcLottoArray() {
    const lotto = [];
    while (lotto.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (lotto.includes(num)) continue;
        lotto.push(num);
    }
    
    return lotto.sort((n1, n2) => n1 - n2);
}

function calcLottoSet() {
    const lotto = new Set();
    while (lotto.size < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        lotto.add(num);
    }

    return [...lotto].sort((n1, n2) => n1 - n2);
}

console.log(`Array : ${calcLottoArray().join(', ')}`);
console.log(`Set   : ${calcLottoSet().join(', ')}`);

