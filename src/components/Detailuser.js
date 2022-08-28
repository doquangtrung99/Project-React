import React from "react";
import { withRouter } from 'react-router-dom'
import axios from "axios";
class Detailuser extends React.Component {

state = {
    ojb:[]
}

    async componentDidMount(){
        let id = this.props.match.params.id
        let res = await axios.get(`https://reqres.in/api/users/${id}`)
        this.setState({
            ojb: res && res.data && res.data.data ? res.data.data : []
        })
    }



    render() {
        let {ojb} = this.state
        return (
            
            <>
                <div>ID: {ojb.id}</div>
                <div>Firstname: {ojb.first_name}</div>
                <div>Lastname: {ojb.last_name}</div>
                <div>Email: {ojb.email}</div>
                <img src={ojb.avatar}/>
            </>
        )
    }
}
export default withRouter(Detailuser);