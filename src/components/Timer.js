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
        if( preState.coundown !== this.state.coundown  && this.state.coundown === 0){
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
        console.log("1")
        if(count === 0 ){
            return ;
        }
      let timmer = setInterval(() => {
            setCount(count - 1)
            console.log("2")

       }, 1000)
       
       return () => {
        clearInterval(timmer)
        console.log("3")

       }
    },[count])

    return (
        <>
        <div>
            {        console.log("0")}
            {count}
        </div>
        <div>
            {count === 0 ? "Hello world": ""}
        </div>
        </>
    )
}
export {Timer, SetTimer} 