// for 반복문

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 0; i < 10; i++) {
//     console.log(`i = ${i}`);
// }

const numbers = [1, 2, 3, 4, 5];
for(let i = 0; i < numbers.length; i++) {
    console.log(`i = ${numbers[i]}`);
}

// 과일이 레몬이면 이모지 출력
let fruits = ['apple', 'orange', 'lemon', 'mango', 'banana'];
let emojis = ['🍎', '🍊', '🍋', '🥭', '🍌'];
for(let i=0; i < fruits.length; i++) {
    if(fruits[i] == 'lemon') {
        console.log(fruits[i], emojis[i]); 
        // break;   
        // i = fruits.length;
    }
}