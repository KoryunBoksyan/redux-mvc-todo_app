class TasksOperations {
    constructor (taskApi) {
        this.taskApi = taskApi;
    }
    addTask = async (data) => {
        const response = await this.taskApi.addTask(data);
        return response;
    }

    getAllTasks = async (data) => {
        const response = this.taskApi.getAllTasks(data);
        return response;
    }

    putAllTask = async (data) => {
        const response = this.taskApi.putAllTask(data);
        return response;
    }

    getTaskId = async (data) => {
        const response = this.taskApi.getTaskId(data);
        return response;
    }
}

export default TasksOperations;