// switch-case 문
let res = undefined;
switch (1) {
    case 0:
        // console.log("Monday")
        res = "Monday";
        break;
    case 1:
        // console.log("Tuesday")
        res = "Tuesday";
        break;
    case 2:
        // console.log("Wednesday")
        res = "Wednesday";
        break;
    default:
        console.log("Please choose a date")
        break;
}
console.log(`You Chose ${res}`);

let num, img = undefined;
num = 100;
switch(num%2) {
    case (0):
        img = '🍊';
        break;
    default:
        img = '🍎';
        break;
}
console.log(img);