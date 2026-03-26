/* 
for Each 메소드는 Iterator 심볼 객체를 상속한 객체에서 사용됨
Iterator 상속 객체. forEach(callback)
Array(배열).forEach() 
*/
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((item, idx) => console.log(`numbers[${idx}] = ${item}`));

let fruits = new Array('🍊', '🍎', '🍋', '🍏', '🍌');
// fruits.forEach(item => console.log(item));

fruits.forEach((item, idx) => {
    if(item === '🍏') {
        fruits.splice(idx, 1, '🍓');
    }
});
console.log(fruits);

// 배열을 다루는 반복문에서는 제공되는 매소드들을 활용하는것이 권장된다. 단순 for문 대신 -> forEach 매소드 이용
let idx = 0;
for(const item of fruits) {
    if(item === '🍓') {
        fruits.splice(idx, 1, '🌮');
    }
    idx++;
}
console.log(fruits);