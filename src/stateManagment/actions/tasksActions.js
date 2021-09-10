import {ACTION_TYPES} from "../../core/actionTypes";

// Add task
export const cntrlAddTask = payload => ({
    type: ACTION_TYPES.CNTRL_ADD_TASK,
    payload,
});

// All Tasks GET
export const cntrlGetAllTask = payload => ({
    type: ACTION_TYPES.CNTRL_GET_ALL_TASK,
    payload,
});

export const rxGetAllTaskPanding = payload => ({
    type: ACTION_TYPES.RX_GET_ALL_TASK_PENDING,
    payload,
});

export const rxlGetAllTaskDone = payload => ({
    type: ACTION_TYPES.RX_GET_ALL_TASK_DONE,
    payload,
});

// Delete Task

export const cntrlDeleteTask = payload => ({
    type: ACTION_TYPES.CNTRL_DELETE_TASK,
    payload,
});

// Tasks PUT
export const cntrlPutTask = payload => ({
    type: ACTION_TYPES.CNTRL_PUT_TASK,
    payload,
});

export const rxPutTaskPanding = payload => ({
    type: ACTION_TYPES.RX_PUT_TASK_PENDING,
    payload,
});

export const rxlPutTaskDone = payload => ({
    type: ACTION_TYPES.RX_PUT_TASK_DONE,
    payload,
});

// All Tasks PUT
export const cntrlPutAllTask = payload => ({
    type: ACTION_TYPES.CNTRL_PUT_ALL_TASK,
    payload,
});

export const rxPutAllTaskPanding = payload => ({
    type: ACTION_TYPES.RX_PUT_ALL_TASK_PENDING,
    payload,
});

export const rxlPutAllTaskDone = payload => ({
    type: ACTION_TYPES.RX_PUT_ALL_TASK_DONE,
    payload,
});

// Task by ID
export const cntrlGetTaskById = payload => ({
    type: ACTION_TYPES.CNTRL_GET_TASK_BY_ID,
    payload,
});

export const rxGetTaskByIdPanding = payload => ({
    type: ACTION_TYPES.RX_GET_TASK_BY_ID_PENDING,
    payload,
});


export const rxGetTaskByIdDone = payload => ({
    type: ACTION_TYPES.RX_GET_TASK_BY_ID_DONE,
    payload,
});

export const rxSelectTask = payload => ({
    type: [ACTION_TYPES.RX_SELECT_TASK_BY_ID],
    payload,
});
