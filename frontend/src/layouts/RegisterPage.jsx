import React from 'react'
import Register from '../components/Register'


const RegisterPage = () => {
    return (
        <>
            <div className='d-flex flex-md-row flex-column-reverse '>
                <div className='w-100'>
                    <h3 className='text-center mt-2'>Sign Up</h3>
                    <Register />
                </div>
                <div className='w-100 p-2 '>
                    <img className='w-100 h-100 rounded-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgvns67pVPxrWg_KiRKgGhXdT6PQQzbJv-w&usqp=CAU" alt="" />
                </div>
            </div>
        </>
    )
}

export default RegisterPage