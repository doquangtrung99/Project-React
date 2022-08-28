import React from "react";
import { connect } from 'react-redux'
import picture1 from '../assets/images/picture1.jpg'
import picture2 from '../assets/images/picture2.jpg'
import '../styles/Home.scss'

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
            <>
            <div className="containterr">
                <div className="topp">
                    <img className="imgg" src={picture1}/>
                </div>
                    
                <div className="bott">
                    <div className="insidebott">
                        <img className="imggg" src={picture2}/>
                        <p>hi</p>
                        <p>his</p>
                    </div>
                    <div className="inside">
                        acbdxyzasdasfasfas
                    </div>
                </div>

            
            </div>
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
            </>
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