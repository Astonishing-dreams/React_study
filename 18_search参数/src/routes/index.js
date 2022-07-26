import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/Home/News'
import Message from '../pages/Home/Message'
import Detail from '../pages/Home/Message/Detail'

export default [
    {
        path: "/about",
        element: <About></About>
    },
    {
        path: "/home",
        element: <Home></Home>,
        children: [
            {
                path: 'news',
                element: <News></News>
            },
            {
                path: 'message',
                element: <Message></Message>,
                children: [
                    {
                        path: 'detail',
                        element: <Detail></Detail>
                    }
                ]
            }
        ]
    },
    {
        path: "/",
        element: <Navigate to='/about'></Navigate>
    },
]
