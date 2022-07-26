import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>React Router Demo</h3>
            <button onClick={back}>回退</button>
        </div>
    )
}
