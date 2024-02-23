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
