/* Math 클래스 모든 메소드와 속성이 static 으로 정의되어 있다.
호출 : Math.메소드( ) or Math.속성 */
let a = 1234.5231;

console.log(`Math.abs(value) :: ${Math.abs(a)}`); // 절대값
console.log(`Math.floor(value) :: ${Math.floor(a)}`); // 소수점 절삭
console.log(`Math.trunc(value) :: ${Math.trunc(a)}`); // 소수점 절삭
console.log(`Math.round(value) :: ${Math.round(a)}`); // 소수점 반올림
console.log(`Number.toFixed() :: ${a.toFixed(2)}`); // 소수점 반올림(자릿수 지정)
console.log(`Math.max(value) :: ${Math.max(1, 2, 3, 4, 5)}`);
console.log(`Math.min(value) :: ${Math.min(1, 2, 3, 4, 5)}`);
console.log(`Math.random :: ${Math.random()}`); // -> 0 ~ 1 사이 값 임의로 출력

let num = Math.random() * 100 + 1;
num = num.toFixed(2);
console.log(Number.parseInt(num));

const randomNumber = () => Math.floor(Math.random() * 100 + 1);
let number = Math.floor(Math.random() * 100 + 1);
console.log(number);
console.log(randomNumber());