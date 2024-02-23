"use strict";
// -- 타입 예시
const msg = 'In StarBucks';
console.log(msg);
let mightBeUndefined = undefined;
let nullableNumber = null;
let color = 'red';
color = 'yellow';
// color='green';  //에러남
// -- 함수작성
function sumArr(nums) {
    return nums.reduce((acc, cur) => acc + cur, 0);
}
sumArr([1, 2, 3, 4]);
function returnNothing() {
    console.log('HI');
}
class Circle {
    // 변수
    constructor(radius) {
        this.radius = radius;
    }
    // 생성자
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Square(5, 4)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
const person1 = {
    name: '눈사람',
    age: 0,
};
const developer1 = {
    name: '개발장',
    age: 25,
    skills: ['js', 'css'],
};
const people = [person1, developer1];
const colorr = 'red';
const colors = ['red', 'orange'];
// -- Generics
// type을 미리 모를 때
// EX 1.
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
// EX 2.
function wrap(param) {
    return {
        param
    };
}
const wrapped = wrap(10);
const items = {
    list: ['a', 'b', 'c']
};
const bucket = {
    list: ['a', 'b', 'c']
};
// -- class 에서 Generics 사용
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
