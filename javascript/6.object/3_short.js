let n = 'Hong'
let age = 30
let address = '서울시 강남구'

let person = {
    n, age, address
}
// 변수를 객체의 값으로 정의하는 경우, property(key) 값 생략 가능하다.
console.log(person);

// 두 값을 입력받아 객체로 리턴하는 함수
function createObject(x, y) {
    return { x, y }
}
const createObjectArrow = (x,y) => {return {x,y}}

let number1 = createObject(1, 2);
let number2 = createObjectArrow(1, 2);
console.log(number1);
console.log(number2);

const createEmployee = (name, age, address, department) => {return {name, age, address, department}}
let employee = createEmployee('Lee', 24, '서울시 강서구', 'IT');
let employee2 = createEmployee('Jane', 32, '서울시 강북구', 'IT');
console.log(employee)
console.log(employee2)

let empList = [
    ['Kim', '20', 'Seoul', 'IT'],
    ['Lee', '25', 'Busan', 'IT'],
    ['Park', '30', 'Incheon', 'HR']
];

// for(let i=0; i<empList.length; i++) {
//     let rows = '';
//     for(let j=0; j<empList[i].length; j++) {
//         rows += empList[i][j] + '\t';
//     }
//     console.log(rows);
// }

console.log();
for(let i=0; i<empList.length; i++) {
    let object = {};
    for(let j=0; j<empList[i].length; j++) {
        if(j==0) object.name = empList[i][j];
        if(j==1) object.age = empList[i][j];
        if(j==2) object.address = empList[i][j];
        if(j==3) object.department = empList[i][j];
    }
    console.log(object);
}

console.log();
for(let i=0; i<empList.length; i++) {
    let object = null;
    let name, age, address, department = undefined;

    for(let j=0; j<empList[i].length; j++) {
        if(j==0) name = empList[i][j];
        if(j==1) age = empList[i][j];
        if(j==2) address = empList[i][j];
        if(j==3) department = empList[i][j];
    }
    object = createEmployee(name, age, address, department);
    console.log(object);
}
// 매개변수와 변수값의 차이 알고있기.