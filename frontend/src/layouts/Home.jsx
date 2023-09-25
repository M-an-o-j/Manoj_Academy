import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Homedata from '../components/Homedata'
import { useDispatch, useSelector } from 'react-redux'
import { getHomecontent } from '../actions/contentAction'


const Home = () => {
  const { loading, contents, error } = useSelector((state) => state.Homecontentstate)
  const { user, isAuthenticated } = useSelector((state) => state.Userdatastate)
  const dispatch = useDispatch()
  const first_name = localStorage.getItem('MA_User')

  useEffect(() => {
    dispatch(getHomecontent)
  }, [dispatch , first_name])

  return (
    <>
      <div className='mt-3 container'>
        {first_name != null &&
          <div className='text-center'>
            <h2 >Welcome {first_name} ..,</h2>
          </div>
        }
        <Homedata datas={contents} />
      </div>
    </>
  )
}

export default Home