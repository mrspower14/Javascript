let integer = 123;
let negative = -123;
let double = 1.23
console.log(integer, negative, double);

let binary = 0b10101010;
let octal = 0o157;
let hex = 0x7a3f;
console.log(binary, octal, hex);

let inf = 1/0;
let minf = -1/0;
console.log(inf, minf);

let nan = 1/'hello';
console.log(nan);

let greetings = '안녕하세요';
console.log(greetings);

greetings = "안녕하세요";
console.log(greetings);

greetings = '"안녕하세요"';
console.log(greetings);

const nameBTS = 'BTS'
greetings = `안녕하세요 ${nameBTS}`;
console.log(greetings);

let isFree = true;
console.log(isFree);
isFree = false;
console.log(isFree);
