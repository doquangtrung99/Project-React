import { calendarFormat } from "moment";
import React , {useState,useEffect} from "react";


let timer;
class Timer extends React.Component{
    state = {
        coundown: 5,
    }
    
    componentWillUnmount(){
        if(timer){
            clearInterval(timer)
        }
    }
    
    componentDidMount(){
        
        timer = setInterval(() => 
        this.setState({
            coundown:this.state.coundown -1
        })
        , 1000)
    }

    componentDidUpdate(prevProps,preState){
        if( this.state.coundown === 0){
           return clearInterval(timer)
        }
    }
    render(){
        return(
            <>
            <div>
                {this.state.coundown}
            </div>
            </>
          
        )
    }
}

const SetTimer = () => {
    const [count, setCount] = useState(5)

    useEffect(() => {
        if(count === 0 ){
            return ;
        }
      let timmer = setInterval(() => {
            setCount(count - 1)
       }, 1000)
       
       return () => {
        clearInterval(timmer)
       }
    },[count])

    return (
        <>
        <div>
            {count}
        </div>
        <div>
            {count === 0 ? "Hello world": ""}
        </div>
        </>
    )
}
export {Timer, SetTimer} 