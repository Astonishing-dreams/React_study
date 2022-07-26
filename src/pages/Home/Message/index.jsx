import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
    const [messages] = useState([
        { id: "01", title: "message1", content: "嗨嗨嗨" },
        { id: "02", title: "message2", content: "来啦" },
        { id: "03", title: "message3", content: "！！！" }
    ])
    return (
        <div>
            <ul>
                {
                    messages.map(item => {
                        return (
                            <li key={item.id}>
                                <Link to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</Link>
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
