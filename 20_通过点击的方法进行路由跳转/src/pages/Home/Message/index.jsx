import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
    const navigate = useNavigate()
    const [messages] = useState([
        { id: "01", title: "message1", content: "嗨嗨嗨" },
        { id: "02", title: "message2", content: "来啦" },
        { id: "03", title: "message3", content: "！！！" }
    ])
    const showDetail = (item) => {
        navigate('detail', {
            replace: false,
            state: {
                id: item.id,
                title: item.title,
                content: item.content
            }
        })
    }
    return (
        <div>
            <ul>
                {
                    messages.map(item => {
                        return (
                            <li key={item.id}>
                                <Link to='detail' state={{
                                    id: item.id,
                                    title: item.title,
                                    content: item.content
                                }}>{item.title}</Link>&nbsp;&nbsp;&nbsp;
                                <button onClick={() => showDetail(item)}>查看详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet></Outlet>
        </div>
    )
}
