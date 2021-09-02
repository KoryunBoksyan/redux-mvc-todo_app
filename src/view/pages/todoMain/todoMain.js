import { useState } from 'react';
import TodoFooter from './todoLogic/todoFooter';
import TodoForm from './todoLogic/todoForm';
import Todolist from './todoLogic/todoList';

function ToDo() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Starting tast app",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Processing tast app",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Finishing tast app",
      isCompleted: false,
    },
  ]);

  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ]);
      }} 
      />
      <Todolist 
        todos={todos}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if(todo.id === newTodo.id){
              return newTodo;
            }
            return todo;
          }))
        }}
        onDelate={(todo) => {
          setTodos(todos.filter((td) => td.id !== todo.id));
        }
      }
      />
      <TodoFooter 
        todos={todos} 
        onClearCompleted={() => {
          setTodos(todos.filter((todo) => !todo.isCompleted));
        }}  
      />
    </div>
  );
}

export default ToDo;
