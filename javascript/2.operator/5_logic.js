// 논리 연산
// (boolean 논리식) && (boolean 논리식) = boolean 결과값
let a = 3;
let b = 7;

console.log((a < b) && (a < b));
console.log((a < b) && (a == b));
console.log((a < b) && (a > b));
console.log((a < b) && (a !== b));

console.log((a < b) || (a < b));
console.log((a < b) || (a == b));
console.log((a < b) || (a > b));
console.log((a < b) || (a !== b)); // 전부 앞 논리식 true 이므로 모두 shorcut 연산 가능

let id = 'test';
let pwd = '1234';
if(id == 'test' && pwd == '1234') { }
// -> 로그인 처리시에 숏컷 연산 사용 가능