import React from "react";
import moment from "moment";
import axios from "axios";
import { useState, useEffect } from "react";
import '../styles/Covid.scss'

const useFetch = (url) => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    
    useEffect( async() => {
        
        try{
            let res  = await axios.get(url);
        let datacovid = res && res.data ? res.data : [];
        if(datacovid && datacovid.length > 0 ){
        datacovid.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY")
            return item;
        })
        }
        console.log(datacovid)
        setData(datacovid)
        setLoading(false)
        setError(false)
        }
        catch(e){
            setLoading(false)
            setError(true)
        }

    },[])



    return {data,loading,error}
}

export default useFetch;