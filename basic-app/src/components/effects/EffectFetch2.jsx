import { useState, useEffect } from 'react'
import { fetchData } from '../../util/fetch.js';
import AvatarImageList from "../avatar/AvatarImageList.jsx"
import style from "../avatar/Avatar.module.css"

export default function EffectFetch2() {
    const [data, setData] = useState([]);
    useEffect(() => {
        // 비동기 함수 fetchData() 선언 및 호출
        const loadData = async() => {
            const jsonData = await fetchData("http://localhost:5173/public/data/avatar.json");
            const newList = jsonData.list.map((item) => ({
                ...item,
                style: style.avatar_img_circle
            }));
            setData(newList);
        }
        loadData();
    }, []);

    return (
        <>
            <AvatarImageList imgList={data} />
        </>
    )
}