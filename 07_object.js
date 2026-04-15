// //1
// const human = {
//     name: '라라랜드',
//     age: 30 
// };
// console.log(human.name, human.age);

// human.age = 20;
// human["name"] = '그레이스';
// console.log(human.name, human['age']);

// // 3.객체에 속성 추가 삭제 
// human.job = 'teacher';
// console.log(human.job);

// human.info = function() {
//     console.log(`이름은 ${this.name}이고 직업은 ${this.job}이다.`);
// }
// human.info();

// delete human.age;
// console.log(human.age);

// //2
// const eridian = {
//     name: '로키',
//     age: 30,
//     greet: function () {
//         console.log(`안녕 나는 ${this.name}야!`);
//     },
//     goodbye () {
//         console.log('goodbye');
//     }
// };

// eridian.greet();
// eridian.goodbye();

// // 4.객체 생성자 함수
// function Person(name, age) {
//     this.name = name,
//     this.age = age,
//     this.greet = function() {
//         console.log(`안녕 나는 ${this.name}야!`);
//     }
// }

// const person1 = new Person('양관식', 20);
// const person2 = new Person('오애순', 20);
// console.log(person1);
// console.log(person1.name, person1.age);
// person1.greet();
// console.log(person2);
// console.log(person2.name, person2.age);
// person2.greet();

// // 5.student 모델링 해보기 
// function Student(name, age, className, grade, addr) {
//     this.name = name;
//     this.age = age;
//     this.className = className;
//     this.grade = grade;
//     this.addr = addr;
//     this.hello = function() {
//         console.log('안녕하세요');
//         console.log(`나는 ${this.name}이고, 나이는 ${this.age}살 입니다.`);
//         console.log(`${this.className} ${this.grade} 학년 입니다.`);
//     }
// }

// const student1 = new Student('홍길동', 20, '전산과', 1, '서울시 구로구');
// console.log(student1);
// student1.hello();

// // 6.class 사용
// class Person1 {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         console.log(`Hello, ${this.name}`);
//     }
// }

// const person3 = new Person1('양금명', 20);
// console.log(person3);
// console.log(person3.name, person3.age);
// person3.greet();

// // 7.private class 사용
// class Person2 {
//     #idNo;
//     constructor(name, age, idNo) {
//         this.name = name;
//         this.age = age;
//         this.#idNo = idNo;
//     }
//     getIDNo(){
//         console.log(`idNo: ${this.#idNo}`);
//     }
// }
// const person4 = new Person2('양금명', 20, '123455');
// console.log(person4);
// person4.getIDNo();
// console.log(person4.name, person4.idNo); //person4.#idNo private 오류 발생

// 8.class 정의 실습
class Vehicle {
    constructor (speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
    }
    speedDown() {
        this.speed -= 10;
    }
    info() {
        console.log(`현재 속도는 ${this.speed} 입니다.`)
    }
}

// const vehicle = new Vehicle(100);
// vehicle.info();
// vehicle.speedUp(); 
// vehicle.info();
// vehicle.speedDown();
// vehicle.info();

// 9.Vihicle 상속 구현
class Car extends Vehicle {
    constructor(speed, wheels, seats) {
        super(speed);
        if (!wheels) this.wheels = 4;
        if (wheels) this.wheels = wheels;
        this.seats = seats;
    }
    drive(){
        console.log(`현재 속도는 ${this.speed}로 운행 `);
    }
}
// const car = new Car(100, 4, 4);
// console.log(car);
// car.speedUp();
// console.log(car.speed);
// car.info();
// car.drive();

// const car1 = new Car(80);
// console.log(car1);

class Truck extends Car {
    constructor(speed, wheels, seats, loadage) {
        super(speed, wheels, seats);
        this.loadage = 10;
        if (loadage){
            this.loadage = loadage;
        }
    }
    load() {
        console.log('truck load');
    }
    unLoad() {
        console.log('truck unLoad');
    }
}
const truck1 = new Truck(100, 4, 4, 5);
console.log(truck1);
truck1.load();
truck1.unLoad();
const truck2 = new Truck(80);
console.log(truck2);
