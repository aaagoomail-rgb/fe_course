/* Counter */
import style from './Counter.module.css'
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className={style.counter_container}>
            <p>현재 카운트 :</p>
            <h1 style={{fontSize:'40px'}}>{count}</h1>
            <div className={style.counter_buttons}>
                <button type="button" onClick={() => setCount(count-100)}>-100</button>
                <button type="button" onClick={() => setCount(count-10)}>-10</button>
                <button type="button" onClick={() => setCount(count-1)}>-1</button>
                <button type="button" onClick={() => setCount(count+1)}>+1</button>
                <button type="button" onClick={() => setCount(count+10)}>+10</button>
                <button type="button" onClick={() => setCount(count+100)}>+100</button>
            </div>
        </div>
    )
}