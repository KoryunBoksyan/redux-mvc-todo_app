import { useState } from "react";

function TodoForm ({onAdd}){
    const [text, setText] = useState("")
    const addTodo = (e) => {
        setText(e.target.value)
        localStorage.setItem("text", text)
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input 
                type="text" 
                value={text} 
                onChange={(e)=> addTodo(e)}
                ></input>
            <button>Add</button>
            {/* {console.log(localStorage.getItem("text", text))} */}
        </form>
        
    )

}

export default TodoForm;