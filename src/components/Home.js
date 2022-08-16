import React from "react";
import { connect } from 'react-redux'
class Home extends React.Component {

    delete = (item) => {
        this.props.Deleteuser(item)
    }

    add = () => {
        this.props.Adduser()
    }
    render() {
        let listuser = this.props.data;
        return (
            <div>
                {listuser.map((item, index) => {
                    return (
                        <>
                            <div key={item.id}>
                                <span>{index + 1} - {item.name}</span> <span onClick={() => this.delete(item)}>X</span>
                            </div>
                        </>
                    )
                })}
                <div>
                    <button onClick={() => this.add()}>Add</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state.user }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Deleteuser: (deleteuser) => dispatch({ type: 'DELETE_USER', payload: deleteuser }),
        Adduser: () => dispatch({type:'ADD_USER'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);