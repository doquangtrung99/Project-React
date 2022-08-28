import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./Fetch";
import Fetch from './Fetch'

const Detail = () => {
    let { id } = useParams();
    let { data } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return (
        <div>
            Hisanhem {id}
        </div>
    )

}
export default Detail;