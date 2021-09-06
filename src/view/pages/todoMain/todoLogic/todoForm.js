import { useState } from "react";

function TodoForm ({onAdd}){
    const [text, setText] = useState("")
    const addTodo = (e) => {
        setText(e.target.value)
        localStorage.setItem("text", text)
    }

    const handeleInputValue = (e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
    }


    return (
        <form onSubmit={handeleInputValue}>
            <input 
                type="text" 
                value={text} 
                onChange={(e)=> addTodo(e)}
                />
            <button>Add</button>
            {/* {console.log(localStorage.getItem("text", text))} */}
        </form>
        
    )

}

export default TodoForm;