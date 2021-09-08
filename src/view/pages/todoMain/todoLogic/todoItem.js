function TodoItem ({ todo, onChange, onDelete }){
    return (
        <div>
            <label>
                <input
                    defaultValue={todo.completed}
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={(e) => onChange({
                        ...todo,
                        completed: e.target.checked
                    })}
                ></input>
                {todo.description}
                <button onClick={() => {onDelete(todo)}}>X</button>
            </label>
        </div>
    )
}

export default TodoItem;