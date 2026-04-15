// function Person1(name, age) {
//  this.name = name;
//  this.age = age;
// }
// Person1.prototype.greet = function () {
//  console.log(`안녕 나는 ${this.name}야!`);
// };

// const person1 = new Person1('양관식', 20);
// const person2 = new Person1('오애순', 20);

// console.log(person1.name, person1.age);
// person1.greet();
// person2.greet();

function Person2(name, age) {
    this.name = name;
    this.age = age;
}
Person2.prototype.greet = function() {
    console.log(`안녕 나는 ${this.name}야!`);
};

// Person2.prototype.hometown = '제주도';
// const person5 = new Person2('양관식', 20);
// const person6 = new Person2('오애순', 20);
// console.log(person5.hometown, person6.hometown);

// Person2.prototype.hometown = '서울';
// console.log(person5.hometown, person6.hometown);
 
function Student(name, age, major) {
    Person2.call(this, name, age);
    this.major = major;
}
Student.prototype = Object.create(Person2.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
    console.log(`${this.name}은 ${this.major}를 공부한다.`);
};

const s1 = new Student('양관식', 20, '컴퓨터공학');
s1.greet();
s1.study();
