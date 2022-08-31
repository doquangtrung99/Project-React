import React from "react";
import { useState,useEffect } from "react";


const Countdown = () => {
    const [count,setCount] = useState(5)
    useEffect(() => {
        if(count === 0){
            return;
        }

        let timer = setInterval(() => {
            setCount(count -1 )
        }, 1000);
        console.log(count)
        
        return () => {
            clearInterval(timer)
        }
    },[count])
    return(
        <>
        <div>
         {count}
        </div>
        <div>
        {}
        </div>
        </>
    )
}

export default Countdown;