import React from 'react'

const ConDetail = ({ datas }) => {
    return (
        <>
            {datas &&
                <div className='p-4'>
                    <div className='mb-2'>
                        <img className='cd-img-width ' src={`http://127.0.0.1:8000/${datas.Thumbnail}`} alt="" />
                    </div>
                    <div>
                        <div>
                            <h1>{datas.title}</h1>
                            <p>Created at : {datas.created_at}</p>
                        </div>
                        <div>
                            <h3>Description</h3>
                            <p>{datas.Description}</p>
                        </div>
                        <div>
                            <button>Go to lesson</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ConDetail