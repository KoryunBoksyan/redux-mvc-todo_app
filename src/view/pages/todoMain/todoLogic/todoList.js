import TodoItem from "./todoItem";

function TodoList({ todos, onChange, onDelate }) {
    return (
        <div>
            {
                todos.map((todo) => {
                    return (
                        <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        onChange={onChange}
                        onDelete={onDelate}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList;