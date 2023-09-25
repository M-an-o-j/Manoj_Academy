import axios from 'axios'
import {
    registeruserRequest,
    registeruserSuccess,
    registeruserError,
    loginuserRequest,
    loginuserSuccess,
    loginuserError,
    userdataRequest,
    userdataSuccess,
    userdataError,
    logoutuserRequest,
    logoutuserSuccess,
    logoutuserError
} from '../slices/userslice'

export const registeruser = userdata => async (dispatch) => {

    try {
        dispatch(registeruserRequest())
        const {data} = await axios.post('http://127.0.0.1:8000/api/accounts/register/', userdata)
        dispatch(registeruserSuccess(data))
    } catch (error) {
        dispatch(registeruserError(error))
    }
}
export const loginUser = userdata => async (dispatch) => {
    try {
        dispatch(loginuserRequest())
        const {data} = await axios.post('http://127.0.0.1:8000/api/accounts/login/', userdata)
        dispatch(loginuserSuccess(data))
        if(data.status === true){
            localStorage.setItem('MA_token', data.Token)
        }
    } catch (error) {
        dispatch(loginuserError(error))
    }
}
export const Logoutuser = async(dispatch) => {
    try{
        const token = localStorage.getItem('MA_token')
        dispatch(logoutuserRequest());
        const {data} = await axios.post("http://127.0.0.1:8000/api/accounts/logout/",null,{
            headers:{
                Authorization : `Token ${token}`
            }
        })
        dispatch(logoutuserSuccess(data))
        if(data.status === true){
            localStorage.removeItem('MA_token')
            localStorage.removeItem('MA_User')
        }
    }catch(error){
        dispatch(logoutuserError(error))
    }
}
export const loaduser = async(dispatch) => {
    try{
        dispatch(userdataRequest());
        const {data} = await axios.get('http://127.0.0.1:8000/api/accounts/myprofile/',{
            headers:{
                Authorization : `Token ${localStorage.getItem('MA_token')}`
            }
        })
        dispatch(userdataSuccess(data));
        console.log(data.user.first_name);
        if(data.status === true){
            localStorage.setItem('MA_User', data.user.first_name)
        }
    }catch(error){
        dispatch(userdataError(error))
    }
}

