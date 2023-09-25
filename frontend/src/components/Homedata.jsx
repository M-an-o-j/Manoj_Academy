import React from 'react'
import { Link } from 'react-router-dom'

const Homedata = ({ datas }) => {
  return (
    <>
      <div className='row row-cols-1 row-cols-md-2 '>
        {datas.data && datas.data.map((data, index) => (
          <div key={index} className='col rounded-3 p-3'>
            <Link to={`content/${data.uid}`} className='text-decoration-none text-dark'>
              <div className='rounded-3'>
                <img className='w-100 rounded-3' src={data.Thumbnail} alt="" />
              </div>
              <div className=''>
                <h4>{data.title}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Homedata