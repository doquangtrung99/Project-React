import React from "react";
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
        </div>
    )
}

export default AddNewBlog;