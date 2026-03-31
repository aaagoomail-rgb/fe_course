/**
 * async / await
 * - 비동기식 로직의 순차적인 순서를 보장하는 키워드.
 * - async 는 await 를 포함한 함수 선언문 앞에 위치.
 * - await 는 실행되는 비동기 객체 앞에 위치.
 */
async function promiseTest() {
    let dataArray = null;

    // Promise 객체 생성
    let promise1 = new Promise((resolve, reject) => {
        let numbers = [1, 2, 3, 4, 5];
        resolve(numbers);
    });

    await promise1
        .then(result =>
            dataArray = result
            // console.log('reuslt => ', result);
        )
        .catch(error => {
            console.log('Error =>', error);
        });

    console.log('dataArray = ', dataArray);
}

promiseTest();
// -> async , await 한 세트. 중요한 내용이미 반드시 숙지.