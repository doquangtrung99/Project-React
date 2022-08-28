import React from "react";
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
        </div>
    )
}

export default AddNewBlog;