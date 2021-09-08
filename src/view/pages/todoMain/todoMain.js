import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cntrlGetAllTask } from '../../../stateManagment/actions/tasksActions';
import Loading from "../../pages/loading/loading"
import TodoFooter from './todoLogic/todoFooter';
import Todolist from './todoLogic/todoList';

function ToDo() {
  const dispatch = useDispatch()
  const {isLoading, data: {data: todos}} = useSelector(state => state.tasks.tasks);
  console.log(isLoading)

useEffect(() => {
  dispatch(cntrlGetAllTask())
}, [])

  return isLoading ? <Loading /> : (
    <div>

      <Todolist 
        todos={todos}
        onChange={(newTodo) => {
          todos.map((todo) => {
            if(todo.id === newTodo.id){
              return newTodo;
            }
            return todo;
          })
        }}
        onDelate={(todo) => {
          todos.filter((td) => td.id !== todo.id);
        }
      }
      />
      <TodoFooter 
        todos={todos} 
        onClearCompleted={() => {
          todos.filter((todo) => !todo.isCompleted);
        }}  
      />
    </div>
  );
}

export default ToDo;
