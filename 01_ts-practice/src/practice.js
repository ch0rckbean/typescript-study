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
