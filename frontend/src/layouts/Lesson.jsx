import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getlesson } from '../actions/lessonaction';

const Lesson = () => {
  const { lessons } = useSelector((state) => state.lessondatastate)
  const uid = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getlesson(uid.uid))
  }, [])
  return (
    <div className="container">
      {lessons != null &&
        <div className='p-5'>
          {lessons.status == true ?
            <>
              <h1>{lessons.data.title}</h1>
              <video controls className='w-75 m-3' >
                <source src={`http://127.0.0.1:8000/${lessons.data.video_file}`} type="video/mp4" />
              </video>
            </>
            :
            <>
              <h1>{lessons.message}</h1>
            </>
          }
        </div>
      }
    </div>
  )
}

export default Lesson