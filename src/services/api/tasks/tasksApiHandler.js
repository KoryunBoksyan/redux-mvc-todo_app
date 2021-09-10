import httpClients from "../../httpClients";


const END_POINT = {
    task: "task",
}

const taskUrl = (id) => `${END_POINT.task}${id ? `/${id}` : ''}`;

class TaskApiHandler {
    addTask(description) {
        return httpClients.post(taskUrl(), { description });
    }

    putAllTask(data) {
        const { id, ...payload } = data;
        return httpClients.put(taskUrl(id), payload);
    }

    deleteTask(id) {
        return httpClients.delete(taskUrl(id));
    }

    editTask(data) {
        const { id, ...payload } = data;
        return httpClients.put(taskUrl(id), payload);
    }

    getAllTasks() {
        return httpClients.get(taskUrl());
    }


}

const taskApiHendler = new TaskApiHandler();

export default taskApiHendler;