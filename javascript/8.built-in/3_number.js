/**
 * Number 클래스
 * - valueOf(), toString() ...
 */

let a = 100;
let b = 123456;
let aa = new Number(100);
let bb = new Number(123456);
console.log(a, typeof a); // -> number , 숫자형
console.log(aa, typeof aa); // -> Number , 객체형
console.log(b, typeof b);
console.log(bb, typeof b);

console.log(a.valueOf()); // 100 자동변환. 원본유지
console.log(aa.valueOf());
console.log(b.valueOf());
console.log(bb.valueOf());

console.log(a.toLocaleString()); // 100 자동변환. 원본유지
console.log(aa.toLocaleString());
console.log(b.toLocaleString());
console.log(bb.toLocaleString());

let LocaleNumber = b.toLocaleString();
console.log(LocaleNumber, typeof LocaleNumber)

let number = '123456789';
let locNumber = Number.parseInt(number).toLocaleString();
console.log(locNumber);

let fnumber = '1234.9338';
let flocNumber = parseFloat(fnumber).toLocaleString;
let flocNumber2 = parseFloat(fnumber).toFixed(); // 소수점 첫째자리 반올림
let flocNumber3 = parseFloat(fnumber).toFixed(2); // 출력되는 소수점 자리수, 셋째자리 반올림

console.log('flocNumber = ', flocNumber);
console.log('flocNumber2 = ', flocNumber2);
console.log('flocNumber3 = ', flocNumber3);