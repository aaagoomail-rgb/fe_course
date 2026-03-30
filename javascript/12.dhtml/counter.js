function counter (type) {
    let number = document.querySelector('#number').textContent;
    // -> input 타입은 value 형으로 가져오지만, <tag> Content <tag> 형태의 경우 textContent 형식으로 값을 참조한다.
    console.log(type, number);

    if(type === '+') {
        if(number >= 0) {
            document.querySelector('#number').textContent = ++number;
        }
    }
    else
        if(number > 0) {
            document.querySelector('#number').textContent = --number;
        } 
}