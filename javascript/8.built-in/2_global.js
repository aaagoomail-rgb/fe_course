/**
 * 전역 함수로 최상위 객체인 Window 객체에서 호출되는 함수
 * - 호출방법 : window.함수명
 * - 객체명을 생략 가능
 * - window.alert(), window.confirm(), Number.parseInt(window.parseInt) ...
 * 
 * 전역 객체
 * - encodeURI(), decodeURI() ...
 */
let number = '1234,567';
let intNum = Number.parseInt(number);
// let intNum2 = window.parseInt(number);
// URI 주소 인코딩, 디코딩
console.log('number = ', number, typeof number);
console.log('intNum = ', intNum, typeof intNum);

let uri = 'http://www.naver.com?name=홍길동'
let encodeUri = encodeURI(uri);
let decodeUri = decodeURI(encodeUri);

console.log(uri);
console.log(encodeUri);
console.log(decodeUri);