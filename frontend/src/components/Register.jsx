import axios from 'axios'
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {
    registeruser
} from '../actions/userAction'

const Register = () => {
    const [first_name, setFirstname] = useState("")
    const [last_name, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const dispatch = useDispatch()


    const submithandler = async (e,newuserdata) => {
        e.preventDefault();
        const formdata = new FormData
        formdata.append('first_name', first_name)
        formdata.append('last_name', last_name)
        formdata.append('username', username)
        formdata.append('email', email)
        formdata.append('password', password)
        dispatch(registeruser(formdata))
        setFirstname("")
        setLastname("")
        setUsername("")
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <form className='p-4' onSubmit={submithandler}>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstname"
                        aria-describedby="firstname"
                        onChange={(e) => setFirstname(e.target.value)}
                        value={first_name}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastname"
                        aria-describedby="lastname"
                        onChange={(e) => setLastname(e.target.value)}
                        value={last_name}
                    />
                </div>
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
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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

export default Register