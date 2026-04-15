// const adult = 19;
// let age = 15;

// if (age < adult) {
//     console.log('당신은 미성년자네요');
// }

// if (age < adult) {
//     console.log('당신은 미성년자네요');
// } else {
//     console.log('당신은 성인이네요');
// }

// let gender = 'male';
// if (age < adult) {
//     if (gender === "male") {
//         console.log('당신은 미성년 남성이네요');
//     } else {
//         console.log('당신은 미성년 여성이네요');
//     }
// }


// let isLoggedIn = true;
// let token = 0;

// if (isLoggedIn && token) {
//     console.log('로그인 상태입니다.');   //true && 1
// } else if (isLoggedIn && !token) {
//     console.log('토큰이 없습니다.');    //true && 0
// } else {
//     console.log('로그인이 필요합니다.'); //false
// }

// let age = 15;
// let isMember = false;
// if (age < 18 || isMember) {
//     console.log('할인 대상입니다.');
// } else {
//     console.log('할인 대상이 아닙니다.');
// }

// const browser = '크롬';
// let browserName;

// if (browser === 'Edge') {
//     browserName = '엣지';
// } else if (browser === 'Safari') {
//     browserName = '사파리';
// } else if (browser === '크롬') {
//     browserName = '크롬';
// } else {
//     browserName = '알려지지 않은 브라우저';
// }
// console.log(`브라우저명은 ${browserName} 입니다.`);

// let menu = 2;
// switch (menu) {
//     case 1:
//         console.log('아메리카노');
//         break;
//     case 2:
//         console.log('카페라떼');
//         break;
//     case 3:
//         console.log('카푸치노');
//         break;
//     default:
//         console.log('없는 메뉴입니다.');
// }

// let browser = 'Chrome';
// let browserName;
// switch (browser) {
//     case 'Edge':
//         browserName = '엣지'; break;
//     case 'FF':
//         browserName = '파이어폭스'; break;
//     case 'Chrome':
//         browserName = '크롬'; break;
//     case 'Opera':
//         browserName = '오페라'; break;
//     case 'Safari':
//         browserName = '사파리'; break;
//     default:
//         browserName = '알려지지 않은 브라우저';
// }
// console.log(`브라우저명은 ${browserName} 입니다`);



// console.log(`true is ${Boolean(true)}`);        //true
// console.log(`false is ${Boolean(false)}`);      //false
// console.log(`!!false is ${!!false}`);           //false
// console.log(`0 is ${Boolean(0)}`);              //false
// console.log(`-0 is ${Boolean(-0)}`);            //false
// console.log(`1 is ${Boolean(1)}`);              //true
// console.log(`-1 is ${Boolean(-1)}`);            //true
// console.log(`'' is ${Boolean('')}`);            //false
// console.log(`'0' is ${Boolean('0')}`);          //true
// console.log(`'false' is ${Boolean('false')}`);  //true
// console.log(`null is ${Boolean(null)}`);        //false
// console.log(`undefined is ${Boolean(undefined)}`);  //false
// console.log(`NaN is ${Boolean(NaN)}`);              //false
// console.log(`[] is ${Boolean([])}`);        //배열   //true
// console.log(`{} is ${Boolean({})}`);        //객체   //true