import httpClients from "../../httpClients";


const END_POINT = {
    task: "task",
}

const taskUrl = (id) => `${END_POINT.task}${id ? `/${id}` : ''}`;

class TaskApiHandler {
    addtask(data) {
        return httpClients.post(taskUrl(), data);
    }

    putAllTask(data) {
        const { id, ...payload } = data;
        return httpClients.put(taskUrl(id), payload);
    }

    getAllTasks() {
        return httpClients.get(taskUrl());
    }


}

const taskApiHendler = new TaskApiHandler();

export default taskApiHendler;