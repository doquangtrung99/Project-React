import React from 'react'
import { useState, useEffect } from 'react'
import useFetch from './Fetch'
import '../styles/Blog.scss'
import { NavLink,useHistory } from 'react-router-dom'

const Blog = () => {
    const history = useHistory();
    let {data, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/posts`, true)
    // const [newdata,setNewdata] = useState([])
    let newdata = []
    if(data && data.length > 0){
        newdata = data.slice(0,10)
       
    }

    const showdetail = (item) => {
        console.log(item)
    }

    const handleadd = () => {
        history.push('/add-new-user')
    }
    return (
        <>
        <div>
            <button onClick={() => handleadd()}>Add new</button>
        </div>
        <div className='topcontainer'>
        {loading === false && newdata && newdata.length > 0 && newdata.map((item,index) => {
            return(
                <>
                <div className='single-blog' key={index}>
                <div className='title'>
                    {item.title} 
                </div>
                <hr/>
                <div className='body'>
                    {item.body}
                </div>
                <div className='button'>
                    <NavLink to={`/blog/${item.id}`}> <button>Details</button></NavLink>
               
                </div>
                </div>
                </>
            )
        })}
        {loading === true && 
        <div>
            is loading ....
        </div>
        }   
        </div>
        </>

    )
}

export default Blog;