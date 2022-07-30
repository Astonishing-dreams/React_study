import React, { useState } from 'react'

export default function Demo() {
    const [count, addCount] = useState(0)

    const add = () => {
        addCount(count + 1)
    }

    return (
        <div>
            <h1>当前求和为：{count}</h1>
            <button onClick={add}>+1</button>
        </div>
    )
}
