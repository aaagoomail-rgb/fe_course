/**
 * call back : 함수의 인자에 입력되는 함수 로직, anonymous 함수
 * setTimeout(callback, delay)
 */
function runDelay(callback, delay) {
    setTimeout(callback, delay);
}

runDelay(() => {
    console.log('3초 후, Task Queue에 저장');
}, 3000); // 3초후 Task Queue에 저장. call stack 이 callback 함수 실행.

runDelay(function() {
    console.log('3초 후, Task Queue에 바로 저장');
}); // 3초후 Task Queue에 저장. call stack 이 callback 함수 실행.

runDelay(() => {
    console.log('1초 후, Task Queue에 바로 저장');
}, 1000); // 3초후 Task Queue에 저장. call stack 이 callback 함수 실행.

console.log('The End');