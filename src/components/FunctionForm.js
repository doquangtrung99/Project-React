import React, { useState } from "react";
import '../styles/Form.scss'
import { toast } from "react-toastify";

const Form = () => {
const [Arr,setArr] = useState( 
    [
    { id: '01', title: 'Learn coding' },
    { id: '02', title: 'Swimming' },
    { id: '03', title: 'Running' }
]
)

const[input,setInput]= useState('')
const[EditArray, setEditArray] = useState({})
const handleadd = () => {
    let todo = {id:Math.floor(Math.random()*100) , title: input}
    setArr([...Arr,todo])
    toast.success('Add Success')
}
const handledelete = (todo) => {
    let Arrcopy = [...Arr]
    Arrcopy = Arrcopy.filter(item => item.id !== todo.id)
    setArr(Arrcopy)
    toast.success('Delete success')
}

const handleedit = (todo) => {
    let isEmtyObj = Object.keys(EditArray).length === 0
    
    if(isEmtyObj === false && todo.id === EditArray.id){
        let Arrcopy = [...Arr]
        let indexOjb = Arrcopy.findIndex(item => item.id === todo.id)
        Arrcopy[indexOjb].title= EditArray.title
        setArr(Arrcopy)
        setEditArray({})
        toast.success('Edit Success')
        return;
    }


    setEditArray(todo)
}
const handle = (event) => {
   let EditArraycopy = {...EditArray}
   EditArraycopy.title = event.target.value
   console.log(EditArraycopy)
    setEditArray(EditArraycopy)
}

let isEmtyObj = Object.keys(EditArray).length === 0
console.log(isEmtyObj)
    return(
        <>
            <div>
                <input type='text' value={input} onChange={(event) => setInput(event.target.value)}/> 
                <></> <button onClick={() => handleadd()}>Add</button>
            </div>
        {Arr.map((item,index) => {
            return(  

                <div className="Container">
                {isEmtyObj === true ?
                <div>
                    <div key={item.id}>{index +1} - {item.title} </div>
                </div>
                :
                <>
                { isEmtyObj === false && item.id === EditArray.id ?
                <div> 
                    <input type='text' value={EditArray.title} onChange={(event) => handle(event)}/>
                </div>
                :
                <div>
                    {index +1} - {item.title}
                </div>
                }
                </>
                }
                <span > 
                    <button onClick={() => handleedit(item)}>
                    {isEmtyObj === false && item.id === EditArray.id ? "Save" : "Edit"} 
                    </button> 
                </span>
                <span > <button onClick={() => handledelete(item)}>Delete</button> </span>
                </div>

            )
        })}
        </>
       
    )
}

export default Form;