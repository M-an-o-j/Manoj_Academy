import axios from 'axios'
import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser,loaduser } from '../actions/userAction'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const {isAuthenticated} = useSelector((state) => state.Userdatastate)
    const navigate = useNavigate()

    const submithandler = async (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('username',username)
        formdata.append('password',password)
        dispatch(loginUser(formdata))
        setUsername("")
        setPassword("")
        dispatch(loaduser)    
    }
    if(isAuthenticated){
        navigate('/')
    }

    return (
        <>
            <form className='p-5' onSubmit={submithandler}>

                <div className="mb-3">
                    <label htmlFor="Username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Username"
                        aria-describedby="Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Login