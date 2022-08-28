import React from "react";
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

}

export default useFetch;