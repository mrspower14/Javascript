//학점 구하기 
// let score = 100;
// let grade

// if (score >= 90) {
//     grade = 'A';
// } else if (score >= 80) {
//     grade = 'B';
// } else if (score >= 70) {
//     grade = 'C';
// } else if (score >= 60) {
//     grade = 'D';
// } else {
//     grade = 'F';
// }

// console.log(`당신의 학점은 ${grade} 입니다`);

let day = 2;
let dayName;

switch(day) {
    case 0:
        dayName = '일요일';
        break;
    case 1:
        dayName = '월요일';
        break;
    case 2:
        dayName = '화요일';
        break;
    case 3:
        dayName = '수요일';
        break;
    case 4:
        dayName = '목요일';
        break;
    case 5:
        dayName = '금요일';
        break;
    case 6:
        dayName = '토요일';
        break;
    default:
        dayName = '잘못된 요일';
}

console.log(`오늘은 ${dayName} 입니다`);