import React, { useState, useEffect } from 'react'
// import ReactDOM from 'react-dom'
import root from '../..'

export default function Demo() {
    const [count, addCount] = useState(0)

    useEffect(() => {
        let timer = setInterval(() => {
            addCount(count => count + 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])

    const add = () => {
        // addCount(count + 1) // 第一种写法
        addCount(count => count + 1)
    }

    const unmount = () => {
        // 卸载组件的方法在高版本下面这行会报错，需要使用下下面这个
        // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        root.unmount(document.getElementById('root'))
    }

    return (
        <div>
            <h1>当前求和为：{count}</h1>
            <button onClick={add}>+1</button>
            <button onClick={unmount}>卸载组件</button>
        </div>
    )
}

