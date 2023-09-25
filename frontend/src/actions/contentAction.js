import axios from 'axios'
import { 
    HomecontentRequest, 
    Homecontentsuccess, 
    Homecontenterror 
} from '../slices/contentslice'


export const getHomecontent = async (dispatch) => {
    try {
        dispatch(HomecontentRequest())
        const { data } = await axios.get("http://127.0.0.1:8000/api/home/")
        dispatch(Homecontentsuccess(data))
    } catch (error) {
        dispatch(Homecontenterror(error))
    }
}