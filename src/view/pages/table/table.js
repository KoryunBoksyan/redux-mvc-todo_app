import {React,useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { cntrlGetAllTask, cntrlPutAllTask } from '../../../stateManagment/actions/tasksActions';
import { Checkbox } from '@material-ui/core';
import Loading from "../loading/loading";
import DeleteButton from './buttons/deleteButtons';
import EditButton from './buttons/editButton';
import AddButton from './buttons/addButtons';


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
            width: 130,
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
            width: 350,
            editable: true,
        },
        {
            field: 'edit / delete',
            headerName: 'Edit / Delete',
            width: 270,
            editable: true,
            renderCell: () => <div style={{display: 'flex'}}>
                <EditButton />
                <DeleteButton />
            </div>  
        },
        {
            field: 'more information',
            headerName: 'More Information',
            width: 320,
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
    <div>
        <AddButton />
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={todos.map(todo => ({id: todo._id, ...todo}))}
                columns={columns}
        />
        </div>
    </div>   
  );
}
