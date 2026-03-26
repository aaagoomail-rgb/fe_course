/**
 * wrapper 클래스 - 기본형(원시) 데이터 타입을 객체로 생성하기 위하는 클래스 타입
 * - 기본형(원시) 데이터 타입의 클래스는 첫글자를 대문자로 정의한 Pascal Case
 * - Number(클래스): number(기본형)
 * - String(클래스): string(기본형)
 * - Boolean(클래스): boolean(기본형)
 * - 클래스를 통해 객체 생성 시 메소드 호출이 가능
 * - ✨기본형 타입.메소드 ==(자동변환)===> 객체 타입.메소드
 */

let n1 = 100; // 기본형 선언 및 할당
let n2 = new Number(100); // 참조형 선언 및 객체 생성 후 주소 할당
console.log(n1, typeof n1);
console.log(n2, typeof n2);

console.log(n1 == n2);
console.log(n1 === n2);

console.log('num1.valueOf() = ', n1.valueOf());
console.log('num2.valueOf() = ', n2.valueOf());

let str1 = 'Java';
let str2 = new String('Java');
console.log();
console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(str1 == str2);
console.log(str1 === str2);
console.log(str1.length);
console.log('str1, typeof = ', typeof str1);
console.log(str2.length);

let flag1 = true;
let flag2 = new Boolean(true);

console.log();
console.log(flag1, typeof flag1);
console.log(flag2, typeof flag2);
console.log(flag1 == flag2);
console.log(flag1 === flag2);