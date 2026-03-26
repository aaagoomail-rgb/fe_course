let date = new Date();
let date2 = Date.now();
let year = date.getFullYear();
let month = date.getMonth() + 1; // 0~11 을 출력하기 때문에 정확한 월을 표기하기 위해 +1 해 줌
let day = date.getDate();

console.log(date);
console.log(date2); // -> Oracle 등의 DB 에서만 이렇게 다룸.
console.log(year);
console.log(month);
console.log(day);
console.log(`Today is ${year} . ${month} . ${day}`);
console.log(date.toLocaleDateString('ko-KR'));
console.log(date.toLocaleDateString('en-US'));