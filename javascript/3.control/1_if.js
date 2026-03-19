let fname = undefined;

fname = 'apple';
if(fname == 'apple') {
    console.log('🍎')
}
else {
    console.log(fname);
}

// console.log();
(fname == 'apple') ? console.log('🍎') : console.log(fname)
// -> console.log() 를 이용하므로 삼항 연산 할 때 에는 console.log() 내부에 넣지 않는다.
let res = (fname == 'apple') ? '🍎' : fname
console.log(res);
// -> 이렇게도 사용할 수 있다.

let menus = ['pizza1', 'hotdog1', 'coffee1'];
if(menus[0] == 'pizza') {
    console.log('🍕')
}
else if(menus[1] == 'hotdog') {
    console.log('🌭')
}
else if(menus[2] == 'coffee') {
    console.log('☕')
}
else {
    console.log("Please Enter Right Menu")
}

let num = undefined;
num = 124;
if(num%2 == 0) {
    console.log('🍊')
}
else {
    console.log('🍎')
}

let img = undefined;
(!(num%2)) ? img = '🍊' : img = '🍎';
console.log(img);