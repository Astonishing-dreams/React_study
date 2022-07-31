import React, { useState } from 'react'
// 未写全，在md里有笔记
export default function Parent() {
    const [car, changeCarState] = useState({ carName: "奔驰c63" })

    const changeCar = () => {
        console.log(car);
        changeCarState({ carName: "宝马c30" })
    }

    return (
        <div>
            {console.log('p')}
            <h2>我是父组件</h2>
            <h3>车是：{car.carName}</h3>
            <button onClick={changeCar}>点我换车</button>
            <Child carName={car.carName}></Child>
        </div>
    )
}
function Child(props) {
    return (
        <div>
            {console.log('c')}
            <h2>我是子组件</h2>
            <h3>我收到的车是：{props.carName}</h3>
        </div>
    )
}
