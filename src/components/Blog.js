<<<<<<< HEAD
import { useState, useEffect } from "react";
import useFetch from "./Fetch";
import '../styles/Blog.scss'
import { NavLink, useHistory } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import AddNewBlog from "./AddNewBlog";
const Blog = () => {
    const [newData,setNewData] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { data, loading, err } = useFetch('https://jsonplaceholder.typicode.com/posts', false)
    
    useEffect(() => {
        if(data && data.length > 0 ){
            let datasimple = data.slice(0, 9);
            setNewData(datasimple)
        }
        
    },[data])
    const Addnewblog = (some) => {
        let datadata = newData
        datadata.unshift(some)
        setNewData(datadata)
    }
    return (
        <>
            <div>
                <button className="button1" onClick={() => handleShow()}>Add New Blog</button>
            </div>
            <div className="container-boss">
                {newData.map((item, index) => {
                    return (
                        <div className="container-child" key={item.id}>
                            <div className="title">
                                {item.title}
                            </div>
                            <div className="body">
                                {item.body}
                            </div>
                            <div className="button">

                                <NavLink to={`/blog/${item.id}`}><button className="button2" onClick={() => showdetail(item)}>Details</button></NavLink>
                            </div>

                        </div>
                    )
                })}
            </div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ADD NEW BLOG</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewBlog
                        handleClose={handleClose}
                        Addnewblog={Addnewblog}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </>
=======
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
>>>>>>> e13c07a79cee87901047f598b414a2549c4c2327
        </>

    )
}

<<<<<<< HEAD
export default Blog;


=======
export default Blog;
>>>>>>> e13c07a79cee87901047f598b414a2549c4c2327
