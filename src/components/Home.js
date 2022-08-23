import React from "react";
import { connect } from 'react-redux'
class Home extends React.Component {

    
    delete = (item) => {
        this.props.deleteuser(item)
    }
    
    add = () => {
        this.props.adduser()
    }
    render() {
        let listuser = this.props.data
        return (
            <div>
                {listuser.map((item,index) => {
                    return(
                        <div key={index}>
                            {index +1} - {item.name} <span onClick={() => this.delete(item)}>X</span>
                            {localStorage.removeItem("username1")}
                        </div>
                        
                    )
                })}
                <button onClick={() => this.add()}>Add</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
return {
    data: state.user
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteuser:(user) => dispatch({type:'DELETE_USER', payload:user}),
        adduser: () => dispatch({type:'ADD_USER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);