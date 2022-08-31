import React from "react";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import '../styles/Addnewblog.scss'
import axios from "axios";


const AddNewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const handleSubmit = async () => {
        if (!title || !body) {
            alert("Missing params")
            return;
        }

        let data = {
            title: title,
            body: body,
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        
        if(res && res.data){
            props.Addnewblog(res.data)
        }

        props.handleClose();

    }

    return (
        <div className="head">
            <label>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Body</label>
            <input value={body} onChange={(e) => setBody(e.target.value)} />
            <div className="buttonn">
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
=======
import '../styles/SubmitForm.scss'
import { useState,useEffect } from "react";
import axios from "axios";

const AddNewBlog = (props) => {

    const [title,setTitle] = useState("") 
    const [content,setContent] = useState("") 

    const handleSubmit = async () => {
        if(!title || !content){
            alert('missing params')
            return;
        }

        let data = {
            title:title,
            body:content
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts',data)
        
        props.handleadd(res.data)
        props.handleClose()
    }

    return(
        <div className="top">
            
            <div className="title">     
            <label>Title</label>  
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            
            <div className="content">  
            <label>Content</label>
            <input type="text" value={content} onChange={(event) => setContent(event.target.value)}/>
            </div>
            
            <button onClick={() => handleSubmit()}>Submit</button>
>>>>>>> e13c07a79cee87901047f598b414a2549c4c2327
        </div>
    )
}

export default AddNewBlog;