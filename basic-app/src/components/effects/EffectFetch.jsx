import { useEffect, useState } from 'react';
import AvatarList from '../avatar/AvatarList.jsx'
import people1 from '../../assets/people1.webp';
import people2 from '../../assets/people2.webp';
import people3 from '../../assets/people3.webp';

export default function EffectFetch() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const url = "http://localhost:5173/data/alist.json";

    useEffect(() => {
        console.log("Mount or Update")
        const fetchData = async() => {
            // data = await fetch(url)
            //     .then((response) => response.json())
            //     .then((jsonData) => jsonData) //fetch 타입이 Promise return
            //     .catch((error) => console.log(error));
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, [count])

    return (
        <>
            <h2>{count}</h2>
            <AvatarList list = {data} />
            <button type='button' onClick={() => setCount(count+1)}>Increase Count(+)</button>
        </>
    )
}