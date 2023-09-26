import React from 'react'
import Login from '../components/Login'
import { Bars } from 'react-loader-spinner'
import { useSelector } from 'react-redux'

const LoginPage = () => {
  const { loading } = useSelector((state) => state.Userdatastate)
  return (
    <>
      {
        loading ?
          <div className='d-flex loader justify-content-center align-items-center'>

            <Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true} />
          </div>
          :
          <Login />
      }
    </>
  )
}

export default LoginPage