import React from "react";
import axios from 'axios'
import '../styles/Listuser.scss'
import {withRouter} from 'react-router-dom'
<<<<<<< HEAD
import Countdown from "./Countdown";
=======
import {Timer, SetTimer} from "./Timer";
>>>>>>> e13c07a79cee87901047f598b414a2549c4c2327

class Listuser extends React.Component{
    
    state = {
        arr:[]
    }
    async componentDidMount(){
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            arr: res && res.data? res.data.data : []
        })
    }
    
    click = (item) => {
        this.props.history.push(`/Listuser/${item.id}`)
    }
    render(){
        let {arr} = this.state
        return(
            <>
<<<<<<< HEAD
            <div>
                <Countdown/>
            </div>
=======
                <div>
                    <Timer/>
                    <span>---------------------</span>
                    <SetTimer/>
                </div>
                <div className="list-user">LIST USER</div>
>>>>>>> e13c07a79cee87901047f598b414a2549c4c2327
                {arr.map((item,index) => {
                    return(
                        <div className="name" key={item.id}  onClick={() => this.click(item)  }>
                            {index +1} - {item.first_name} - {item.last_name}
                        </div>
                    )
                })}
            </>
        )
    }

}
export default withRouter(Listuser);