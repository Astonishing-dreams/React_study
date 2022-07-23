import React from 'react'
import { Routes, Route, Navigate, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// import Header from './components/Header'

export default function App() {
  function computedClassName({ isActive }) {
    return isActive ? 'list-group-item active' : 'list-group-item'
  }
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
              <Routes>
                <Route path='/about' element={<About />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/' element={<Navigate to='/about' />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
