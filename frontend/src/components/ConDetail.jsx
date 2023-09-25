import React from 'react'
import { Link } from 'react-router-dom'

const ConDetail = ({ datas }) => {
    return (
        <>
            {datas &&
                <div className='p-4'>
                    <div className='mb-2 border border-4 border-dark rounded-3'>
                        <img className='cd-img-width rounded-3' src={`http://127.0.0.1:8000/${datas.Thumbnail}`} alt="" />
                    </div>
                    <div className='p-2'>
                        <div>
                            <h1 className='display-2 fw-semibold'>{datas.title}</h1>
                            <p className='lead '>Created at : {datas.created_at}</p>
                        </div>
                        <div>
                            <h3 className='display-6 fw-medium'>Description</h3>
                            <p className='lead fw-semibold'>{datas.Description}</p>
                        </div>
                        <div>
                            <Link to={`lessons/${datas.uid}`}>
                                <button className='btn btn-primary'>
                                    Go to lesson
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ConDetail