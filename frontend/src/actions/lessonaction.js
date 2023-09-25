import axios from 'axios'
import { 
    lessonRequest, 
    lessonsuccess, 
    lessonerror 
} from '../slices/lessonslice'


export const getlesson = video_id => async (dispatch) => {
    try {
        dispatch(lessonRequest())
        const { data } = await axios.get(`http://127.0.0.1:8000/api/home/video/${video_id}`,{
            headers:{
                Authorization : `Token ${localStorage.getItem('MA_token')}`
            }
        })
        dispatch(lessonsuccess(data))
    } catch (error) {
        dispatch(lessonerror(error))
    }
}