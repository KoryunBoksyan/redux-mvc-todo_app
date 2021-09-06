class TasksController {
    constructor (taskOperations) {
        this.taskOperations = taskOperations;
    }
    addTask = async (state, action) => {
        const response = this.taskOperations.addTask(action.payload);
        return response;
    }

    getAllTasks = async (state, action) => {
        const response = this.taskOperations.getAllTasks(action.payload);
        return response;
    }

    getTaskId = async (state, action) => {
        const response = this.taskOperations.getTaskId(action.payload);
        return response;
    }
}

export default TasksController;