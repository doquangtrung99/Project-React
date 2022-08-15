import React from "react";
import { toast } from "react-toastify";
import '../styles/Form.scss'
import Add from "./Add";
class Form extends React.Component {

    state = {
        Arr:
            [
                { id: '01', title: 'Learn coding' },
                { id: '02', title: 'Swimming' },
                { id: '03', title: 'Running' }
            ],
        handlearr:{}
    }

    handleadd = (information) => {
        let { Arr } = this.state
        let Arrcopy = [...Arr, information]
        this.setState({
            Arr: Arrcopy
        })
    }

    delete = (todo) => {
        let { Arr } = this.state
        this.setState({
            Arr: Arr.filter(item => item.id !== todo.id)
        })
        toast.success('Delete Success')
    }

    edit = (todo) => {
        let {Arr,handlearr} = this.state
        let isEmtyojb = Object.keys(handlearr).length === 0
       
        if(isEmtyojb === false && todo.id === handlearr.id){
            let Arrcopy = [...Arr];
            let indexOjb = Arrcopy.findIndex(item => item.id === handlearr.id)
            Arrcopy[indexOjb].title = handlearr.title
            this.setState({
                Arr:Arrcopy,
                handlearr:{}
            })    
            return;
        }


       this.setState({
        handlearr:todo
       })
    }

    handleedit = (event) => {
        let{handlearr} = this.state
        let handlearrcopy = {...handlearr}
        handlearrcopy.title = event.target.value
        this.setState({
            handlearr:handlearrcopy
        })
    }
    render() {
        let { Arr,handlearr } = this.state
        let isEmtyojb = Object.keys(handlearr).length === 0
        return (
            <>
                <Add
                    handleadd={this.handleadd}
                />

                <div className="container1">
                    <>
                    {Arr.map((item, index) => {
                        return (
                            <>
                                <div className="table" key={item.id}>
                                    {isEmtyojb === true ?
                                    <span>{index + 1} - {item.title}</span>
                                    :
                                    <>
                                    {isEmtyojb === false && item.id === handlearr.id ?
                                    <span>{index +1} - <input value={handlearr.title} type='text' onChange={(event) => this.handleedit(event)}/></span>
                                    :
                                    <span>{index + 1} - {item.title}</span>
                                    }
                                    </>
                                    }
                                    <button className="edit" onClick={() => this.edit(item)} >{isEmtyojb === false && item.id === handlearr.id? 'Save' : 'Edit'}</button>
                                    <button onClick={() => this.delete(item)}>Delete</button>
                                </div>
                            </>
                        )
                    })}
                    </>
                </div>
            </>
        )
    }
}
export default Form;