const hong = {
    n : '홍길동',
    age : 30
}

console.log(hong);
console.log(hong.n);
console.log(hong.age);

hong.n = 'Cole';
hong.age = 20;
console.log(hong);
console.log(`hong = ${hong}`);

delete hong.n;
delete hong.age;
console.log(hong);