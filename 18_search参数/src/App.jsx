import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'
// import Header from './components/Header'

export default function App() {
  function computedClassName({ isActive }) {
    return isActive ? 'list-group-item active' : 'list-group-item'
  }
  // 根据路由表生成统一的路由
  const element = useRoutes(routes)
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            {/* <Header></Header> */}
            <h3>React Router Demo</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink to="/about" className={computedClassName}>About</NavLink>
            <NavLink to="/home" className={computedClassName}>Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* <Routes>
                <Route path='/about' element={<About />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/' element={<Navigate to='/about' />}></Route>
              </Routes> */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
