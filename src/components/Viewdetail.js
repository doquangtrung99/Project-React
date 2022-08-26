import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import useFetch from './Fetch'

const Viewdetail = () => {
    let {id} = useParams()
    let {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, true)
    console.log(data)
    return(
        <>
        <div>
            {data.id}
        </div>
        <div>
            {data.title}
        </div>
        <div>
            {data.body}
        </div>
        </>
    )
}

export default Viewdetail;