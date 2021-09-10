import { rxlGetAllTaskDone, rxGetAllTaskPanding, rxPutAllTaskPanding, rxlPutAllTaskDone, cntrlGetAllTask, rxPutTaskPanding, rxlPutTaskDone } from "../../stateManagment/actions/tasksActions";

class TasksController {
    constructor (taskOperations) {
        this.taskOperations = taskOperations;
    }
    addTask = async (state, action) => {
        const response = await this.taskOperations.addTask(action.payload);
        state.dispatch(cntrlGetAllTask());
        return response;
    }

    editTask = async (state, action) => {
        const response = await this.taskOperations.addTask(action.payload);
        return response;
    }

    deleteTask = async (state, action) => {
        const response = await this.taskOperations.deleteTask(action.payload);
        return response;
    }


    getAllTasks = async (state, action) => {
        state.dispatch(rxGetAllTaskPanding())
        const response = await this.taskOperations.getAllTasks(action.payload);
        state.dispatch(rxlGetAllTaskDone(response));
    }

    putAllTask =  async (state, action) => {
        state.dispatch(rxPutAllTaskPanding());
        const response = await this.taskOperations.putAllTask(action.payload);
        state.dispatch(rxlPutAllTaskDone(response));
    }

    editTask =  async (state, action) => {
        state.dispatch(rxPutTaskPanding());
        console.log(action);
        
        const response = await this.taskOperations.editTask(action.payload);
        state.dispatch(rxlPutTaskDone(response));
    }

    getTaskId = async (state, action) => {
        const response = this.taskOperations.getTaskId(action.payload);
        return response;
    }
}

export default TasksController;