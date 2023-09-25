import React, { useEffect } from 'react'
import Home from './layouts/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterPage from './layouts/RegisterPage'
import LoginPage from './layouts/LoginPage'
import Header from './components/Header'
import './App.css'
import ContentDetail from './layouts/ContentDetail'
import { useDispatch, useSelector } from 'react-redux'
import { loaduser } from './actions/userAction'
import Lesson from './layouts/Lesson'


const App = () => {
  const dispatch = useDispatch();
  const { loading, user, isAuthenticated } = useSelector((state) => state.Userdatastate)

  useEffect(() => {
    dispatch(loaduser)
  }, [dispatch])
  return (
    <>
      <div className='container-fulid overflow-hidden'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='register/' element={<RegisterPage />} />
            <Route path='login/' element={<LoginPage />} />
            <Route path='content/:uid' element={<ContentDetail />} />
            <Route path='content/:uid/lessons' element={<Lesson />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App