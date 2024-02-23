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

// 1. interface Developer{
//     name:string;
//     age?:number;
//     skills:string[]
// }

// 2. interface Developer extends Person {
//   skills: string[];
// }

// -- type Alias
type Developer = Person & {
  skills: string[];
};

const person1: Person = {
  name: '눈사람',
  age: 0,
};

const developer1: Developer = {
  name: '개발장',
  age: 25,
  skills: ['js', 'css'],
};

type People = Person[]; // Person[]를 People이라는 타입으로 사용
const people: People = [person1, developer1];

type Color = 'red' | 'orange' | 'yellow';
const colorr: Color = 'red';
const colors: Color[] = ['red', 'orange'];

// -- Generics
// type을 미리 모를 때
// EX 1.
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}
const merged = merge({ foo: 1 }, { bar: 1 });

// EX 2.
function wrap<T>(param: T) {
  return {
    param,
  };
}
const wrapped = wrap(10);

// -- interface 에서 Generics 사용
interface Items<T> {
  list: T[];
}
const items: Items<string> = {
  list: ['a', 'b', 'c'],
};

// -- type 에서 Generics 사용
type Buckets<T> = {
  list: T[];
};
const bucket: Buckets<string> = {
  list: ['a', 'b', 'c'],
};

// -- class 에서 Generics 사용
class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    this.list.shift();
  }
}
const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
