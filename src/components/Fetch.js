import React from "react";
<<<<<<< HEAD
import { useState, useEffect } from "react"
import moment from 'moment'
import axios from 'axios'

const useFetch = (url,checkcond) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setError] = useState(false)

    useEffect(async () => {
        try {
            let res = await axios.get(url)
            let check = res && res.data ? res.data : []
            if (check && check.length > 0 && checkcond === true) {
                check.map((item) => {
                    item.Date = moment(item.Date).format("DD/MM/YYYY")
                    return check;
                })
            }
            setData(check)
            setLoading(true)
        }
        catch (e) {
            setError(true)
            setLoading(true)
        }
    }, [url])
    return {
        data, loading, err
    }

=======
import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";
import '../styles/Covid.scss'

const useFetch = (url, checkcond) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    
    useEffect( () => {
        
        const ourRequest = axios.CancelToken.source() // <-- 1st step

        const fetchPost = async () => {
        try{
            let res  = await axios.get(url, {
                cancelToken: ourRequest.token, // <-- 2nd step
              });
        let datacovid = res && res.data ? res.data : [];
        
        if(datacovid && datacovid.length > 0 && checkcond === false ){
        datacovid.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY")
            return item;
        })
        }

        setData(datacovid)
        setLoading(false)
        setError(false)
        }
        catch(e){
            if (axios.isCancel(e)) {
                console.log('Request canceled', e.message);
              } else {
                setLoading(false)
                setError(true)
              }
          
        }
    }
        fetchPost()

    return () => {
        ourRequest.cancel() // <-- 3rd step
    }
},[url])

    return {data,loading,error}
>>>>>>> e13c07a79cee87901047f598b414a2549c4c2327
}

export default useFetch;