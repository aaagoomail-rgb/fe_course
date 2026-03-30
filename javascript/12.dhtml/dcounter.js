/**
 * DOM 객체를 생성하기 전 최초로 호출되는 함수
 * 
 */
window.addEventListener('DOMContentLoaded', function() {
    // this.alert('content All Loaded');
    initForm();
});

// initForm() : content 안에 추가되는 HTML 폼 생성 함수
function initForm() {
    let output = `
        <h1>Counter</h1>
        <div>
            <h2 id = "number">0</h2>
            <!--
                <button type="button" onclick="counter('+')">increment(+)</button>
                <button type="button" onclick="counter('-')">decrement(-)</button>
            -->
            <button type="button" class="button" data-operation="increment">increment(+)</button>
            <button type="button" class="button" data-operation="decrement"">decrement(-)</button>

        </div>
    `;
    document.querySelector('#content').innerHTML = output;
    
    // 버튼 이벤트 관리
    let buttons = document.querySelectorAll('.button');
    // document.querySelector('#content').innerHTML = output; -> 다이나믹(D)HTML 에서는 화면을 구성한 후, 이벤트 처리를 해야 한다.
    console.log(buttons);

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let number = document.querySelector('#number').textContent;
            let type = button.dataset.operation;
            if(type === 'increment') {
                if(number >= 0) {
                    document.querySelector('#number').textContent = ++number;
                    }
            }
            else
                if(number > 0) {
                    document.querySelector('#number').textContent = --number;
                }
            })
    });
}

// // 버튼 이벤트
// const counter = (type) => {
//     let number = document.querySelector('#number').textContent;
//     // -> input 타입은 value 형으로 가져오지만, <tag> Content <tag> 형태의 경우 textContent 형식으로 값을 참조한다.
//     console.log(type, number);

//     if(type === '+') {
//         if(number >= 0) {
//             document.querySelector('#number').textContent = ++number;
//         }
//     }
//     else
//         if(number > 0) {
//             document.querySelector('#number').textContent = --number;
//         } 
// }