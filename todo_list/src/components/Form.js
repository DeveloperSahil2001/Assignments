import React,{useState} from "react"

const AddTodo=(props)=>{
    
    const [name,setTodo]=useState('');

    const formSubmitHandler=(event)=>{
     event.preventDefault();
     if(name){
      props.add(name);
     }
     document.getElementById('listItem').value="";
    }

    return <form onSubmit={formSubmitHandler}>
        <div>
            <label htmlFor="listItem">Add Item: </label>
            <input id="listItem" type="text" placeholder="Todo Title" onChange={(e)=>{setTodo(e.target.value)}}/>
        </div>
        <button id="submit" type="submit">Add Todo</button>
    </form>
}

export default AddTodo;