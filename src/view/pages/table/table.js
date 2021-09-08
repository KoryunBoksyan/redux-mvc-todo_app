import {React,useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { cntrlGetAllTask, cntrlPutAllTask } from '../../../stateManagment/actions/tasksActions';
import Loading from "../loading/loading";
import { Checkbox } from '@material-ui/core';
import httpClients from '../../../services/httpClients';


export default function DataTable() {
    const dispatch = useDispatch()
    const {isLoading, data: {data: todos = []}} = useSelector(state => state.tasks.tasks);

    const handleChange = async (id, checked) => {
        console.log({id, checked});
        await dispatch(cntrlPutAllTask({id, completed: !checked}));
        getTasks();
    };
    
    const columns = [
        {
            field: 'completed',
            headerName: 'Completed',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: ({row: {_id, completed}}) => (
                <Checkbox
                    checked={completed}
                    onChange={() => handleChange(_id, completed)}
                    color="primary"
                />
            ),
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 150,
            editable: true,
        },
    ];

    const getTasks = () => {
        dispatch(cntrlGetAllTask());
    };
  
    useEffect(() => {
        getTasks();
    }, []);

  return isLoading ? <Loading /> : (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={todos.map(todo => ({id: todo._id, ...todo}))}
        columns={columns}
      />
    </div>
  );
}
