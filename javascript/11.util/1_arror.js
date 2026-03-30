/**
 * try~catch~finally : 자바스크립트에서 예외를 처리
 * ~finally : 예외 발생에 상관없이 무조건 출력되는 구
 */

// JS의 배열은 동적으로 관리됨.
let numbers = [1, 2, 3];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

numbers[99] = 1000;
console.log(numbers[99]);
console.log(numbers);

// Number 클래스
let numbers2 = new Number(12345);
try {
    for(const number of numbers2) {
        console.log(number);
    }
} catch (error) {
    console.log('this is error', error);
} finally {
    console.log('fianlly 부분은 무조건 출력')
}
// for...of 문은 반복 가능한 객체 에서만 동작한다. 그러나, Number 객체는 순서대로 꺼낼 수 있는 요소가 없어 비반복 객체로 분류된다.

// Number2 클래스
let numbers3 = new String('12345');
try {
    for(const number of numbers3) {
        console.log(number);
    }
} catch (error) {
    console.log('this is error', error);
}