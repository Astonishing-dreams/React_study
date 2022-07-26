import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
    const [search, setSearch] = useSearchParams()
    console.log(search);
    const id = search.get('id')
    const title = search.get('title')
    const content = search.get('content')
    const x = useLocation()
    console.log(x);
    return (
        <ul>
            <li>
                <button onClick={() => setSearch('id=004?title=嘿嘿嘿?content=123')}>点我更新数据</button>
            </li>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>
    )
}
