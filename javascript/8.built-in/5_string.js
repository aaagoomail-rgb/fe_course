/* String 클래스
splite(), slice(), chatAt(), toUpperCase()
특징 : char 를 하나씩 배열에 저장한다. */
let str = 'Hong';
let strObj = new String('Hong');

console.log(str, typeof str);
console.log(strObj, typeof strObj);
console.log(str == strObj);
console.log(str === strObj);

let str2 = 'Hello ~ JavaScript !';
console.log('str2.length = ', str2.length);
console.log('str2.chartAt(인덱스) = ', str2.charAt(8)); // 인덱스 번호에 해당하는 문자 추출
console.log('str2.toUpperCase() = ', str2.toUpperCase()); // 전부 대문자
console.log('str2.toLowerCase() = ', str2.toLowerCase()); // 전부 소문자
console.log(str2 + ' next React Programming !')
console.log(str2.concat(' next React Programming !')); // 문장 합치기

let str3 = '               blalala              ';
console.log(str3.trim().length);
console.log(str3.trimEnd());
console.log(str3.trimStart());

let fruits = 'apple,lemon,orange';
let fruits2 = 'apple lemon orange';
let fruitList = fruits.split(',');
let fruitList2 = fruits.split(' ');

console.log(fruits, typeof fruits);
console.log(fruitList, typeof fruitList);
console.log(fruitList2, typeof fruitList2);

let str4 = 'Hellor ~ dfdfdf';
console.log(str4.substring(0, 5));
console.log(str4.slice(0, 5));