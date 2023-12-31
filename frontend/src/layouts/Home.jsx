import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Homedata from '../components/Homedata'
import { useDispatch, useSelector } from 'react-redux'
import { getHomecontent } from '../actions/contentAction'
import { loaduser } from '../actions/userAction'
import { Bars } from 'react-loader-spinner'


const Home = () => {
  const { loading, contents, error } = useSelector((state) => state.Homecontentstate)
  const { user, isAuthenticated, userdata } = useSelector((state) => state.Userdatastate)
  const dispatch = useDispatch()
  const first_name = localStorage.getItem('MA_User')

  useEffect(() => {
    dispatch(loaduser)
    dispatch(getHomecontent)
  }, [dispatch])

  console.log(userdata)

  return (
    <>{
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
        <div className='mt-3 container'>
          {userdata != null &&
            <div className='text-center'>
              <h2 >Welcome {userdata.user.first_name} ..,</h2>
            </div>
          }
          <Homedata datas={contents} />
        </div>
    }
    </>
  )
}

export default Home