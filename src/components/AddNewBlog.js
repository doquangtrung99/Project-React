import React from "react";
import '../styles/SubmitForm.scss'
import { useState,useEffect } from "react";


const AddNewBlog = () => {

    const [title,setTitle] = useState("") 
    const [content,setContent] = useState("") 

    const handleSubmit = () => {
        if(!title || !content){
            alert('missing params')
        }
        console.log("Check",title,content)
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