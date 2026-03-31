/**
 * 비동기 로직(미래의 작업)을 구현하는 객체
 * - resolve : 작업 성공시 반환
 * - reject : 작업 실패시 반환
 * - promise 객체 생성
 * ex) const promise 객체 = new Promise((resolve, reject 중 결과에 맞게 알아서 return) => { 비동기 로직(미래의 작업) });
 * - promise 객체 호출
 * ex) promise 객체.then(성공시 callback).catch(실패시 callback);
 */

// Promise 객체 생성
const promise = new Promise((resolve, reject) => {
    // 비동기 로직(미래의 작업)
    let success = true;
    if(success) {
        resolve('Success !');
    } else {
        reject('Fail !');
    }
});

console.log('promise 객체 호출');

promise
    .then((result) => {
        console.log('result = ', result);
    })
    .catch((error) => {
        console.log('error = ', error);
    });

console.log('프로그램 종료');