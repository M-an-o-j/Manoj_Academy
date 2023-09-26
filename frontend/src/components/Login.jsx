import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, loaduser } from '../actions/userAction'
import { useNavigate } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isAuthenticated, loading, error } = useSelector((state) => state.Userdatastate)
    const navigate = useNavigate()

    const submithandler = async (e) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('username', username)
        formdata.append('password', password)
        dispatch(loginUser(formdata))
        setUsername("")
        setPassword("")
        dispatch(loaduser)
    }

    if (isAuthenticated) {
        toast('🦄 Wow so easy!', {
            position: "bottom-left"
        });
        navigate('/')
    }
    if(error){
        toast("oh my god", {
            position: toast.POSITION.BOTTOM_CENTER,
            type: 'error'
        })
    }

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
            }
        </>
    )
}

export default Login