import React, { useEffect, useState } from 'react'
import ConDetail from '../components/ConDetail'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ContentDetail = () => {
    const [detaildata, setContentdetail] = useState([])
    const Token = localStorage.getItem('MA_token')
    const {uid} = useParams('id')

    useEffect(() => {
        const getcontentdetail = async(id,token) => {
            const {data} = await axios.get(`http://127.0.0.1:8000/api/home/${id}`,{
                headers:{
                    Authorization:`Token ${token}`
                }
            })
            setContentdetail(data)
        }
        getcontentdetail(uid,Token)
    },[])
    return (
        <>
            <ConDetail datas={detaildata.data} />
        </>
    )
}

export default ContentDetail