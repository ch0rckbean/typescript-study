// -- 타입 예시
const msg: string = 'In StarBucks';
console.log(msg);

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
// color='green';  //에러남

// -- 함수작성
function sumArr(nums: number[]): number {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
sumArr([1, 2, 3, 4]);
function returnNothing(): void {
  console.log('HI');
}

// -- interface
interface Shape {
  getArea(): number;
}
class Circle implements Shape {
  radius: number;
  // 변수

  constructor(radius: number) {
    this.radius = radius;
  }
  // 생성자

  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
  // 함수
}

class Square implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Square(5, 4)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

interface Person {
  name: string;
  age?: number; // 설정 해도 되고, 안 해도 되는 값
}
// interface Developer{
//     name:string;
//     age?:number;
//     skills:string[]
// }
interface Developer extends Person {
  skills: string[];
}

const person1: Person = {
  name: '눈사람',
  age: 0,
};

const developer1: Developer = {
  name: '개발장',
  age: 25,
  skills: ['js', 'css'],
};
