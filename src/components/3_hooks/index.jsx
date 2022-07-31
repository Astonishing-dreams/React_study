import React, { useState, useEffect, useRef } from 'react'
// import ReactDOM from 'react-dom'
import root from '../..'

export default function Demo() {
    const [count, addCount] = useState(0)
    const myRef = useRef()

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

    const show = () => {
        alert(myRef.current.value)
    }

    const unmount = () => {
        // 卸载组件的方法在高版本下面这行会报错，需要使用下下面这个
        // ReactDOM.unmountComponentAtNode(document.getElementById('root'))
        root.unmount(document.getElementById('root'))
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h1>当前求和为：{count}</h1>
            <button onClick={add}>+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>提示数据</button>
        </div>
    )
}

