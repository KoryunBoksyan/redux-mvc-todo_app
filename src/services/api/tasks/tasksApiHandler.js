import httpClients from "../../httpClients";


const END_POINT = {
    task: "task",
}

const taskUrl = () => `${END_POINT.task}`;

class TaskApiHandler {
    addtask (data) {
        return httpClients.post(taskUrl(), data);
    }

    getAllTasks() {
        // return [{name: 'Task1'}, {name: 'Task2'}, {name: 'Task3'}]
        return httpClients.get(taskUrl());
    }
}

const taskApiHendler = new TaskApiHandler();

export default taskApiHendler;