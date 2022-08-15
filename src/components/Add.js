import React from "react";
class Add extends React.Component {

    state = {
        input: ''
    }

    handleinput = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    add = () => {
        let {input} = this.state
        if(!input){
            alert('You are mising params')
            return;
        }
        this.props.handleadd({
            id: Math.floor(Math.random() * 100),
            title: this.state.input,
        })
    }

    render() {
        return (
            <div>
                <div className="container0">
                    <input value={this.state.input} type='text'
                        onChange={(event) => this.handleinput(event)} /> 
                       <></> <button onClick={() => this.add()}>Add</button>
                </div>
            </div>
        )
    }
}
export default Add;