// Object Literal
// const fruit = {
//     name : 'apple',
//     emogi : '🍎'
// }

//객체의 틀 정의 => 생성자 함수로 생성
function Fruit(name, color, emoji) {
    this.name = name;
    this.color = color;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.color, this.emoji);
    }
}

let apple = new Fruit('apple', 'red', '🍎');
let lemon = new Fruit('lemon', 'yellow', '🍋');
let orange = new Fruit('orange', 'orange', '🍊');
apple.display();
lemon.display();
orange.display();

console.log(apple.name, apple.color, apple.emoji);

function Score(name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    
    this.display = () => {
        console.log(this.name, this.kor, this.eng, this.math);
    }
    this.sum = () => { return this.kor + this.eng + this.math; }
    this.avg = () => { return parseInt(this.sum()/3); }
}

function createScoreList(st, st2, st3, st4, st5) {
    return { st, st2, st3, st4, st5 }
}

let s1 = new Score('Hong', 93, 92, 99);
let s2 = new Score('Smith', 53, 62, 94);
let s3 = new Score('Lee', 83, 82, 91);
let s4 = new Score('Kimg', 73, 82, 89);
let s5 = new Score('James', 63, 62, 79);

// let scroeList = createScoreList(s1, s2, s3, s4, s5);

// console.clear();
// s1.display();
// s2.display();
// s3.display();
// s4.display();
// s5.display();

console.clear();
console.log(`${s1.name} 총점/평균 = ${s1.sum()}/${s1.avg()}`);
console.log(`${s2.name} 총점/평균 = ${s2.sum()}/${s2.avg()}`);
console.log(`${s3.name} 총점/평균 = ${s3.sum()}/${s3.avg()}`);
console.log(`${s4.name} 총점/평균 = ${s4.sum()}/${s4.avg()}`);
console.log(`${s5.name} 총점/평균 = ${s5.sum()}/${s5.avg()}`);

// console.log(ScoreList);