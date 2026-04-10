import { useRef, useState } from 'react';

export default function Login() {
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const [form, setForm] = useState({id:'', pwd:'', name:''});

    const handleFormChange = (e) => {
        let { name, value } = e.target;
        setForm({...form, [name]:value}); //새로운 form 생성
    }
    // console.log('form --> ', form);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        
        if(idRef.current.value.trim() === "") {
            alert('Please Enter ID');
            idRef.current.focus();
        } else if(pwdRef.current.value.trim() === "") {
            alert('Please Enter PWD');
            pwdRef.current.focus();
        } else {
            console.log("서버전송 --> ", form);
        }
    }

    return (
        <>
        <h1>로그인 폼</h1>
        <form name="login_form" onSubmit={handleLoginSubmit}>
            <ul>
                <li>
                    <label htmlFor="id">아이디</label>
                    <input type="text" id="id" name="id" value={form.id} ref={idRef} onChange={handleFormChange}/>
                </li>
                <li>
                    <label htmlFor="pwd">패스워드</label>
                    <input type="password" id="pwd" name="pwd" value={form.pwd} ref={pwdRef} onChange={handleFormChange}/>
                </li>
                <li>
                    <button type='submit'>Login</button>
                    <button>Reset</button>
                </li>
            </ul>
        </form>
        </>
    )
}