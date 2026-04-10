import { useRef, useState } from 'react'

export default function TextInput() {
    const textRef = useRef(null);
    const [text, setText] = useState('홍길동');

    const handleClick = () => {
        let text = textRef.current.value;
        if(text === "") {
            alert('Please Enter Text');
            textRef.current.focus();
        } else {
            alert("서버 전송 --> " + text)
        }
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }
    console.log('text-->', text)

    return (
        <div>
            <h2>Ref : 텍스트 입력</h2>
            <input type="text" name="text" value={text} ref={textRef} onChange={handleChange}/>
            <button type="button" onClick={handleClick}>전송</button>
        </div>
    )
}