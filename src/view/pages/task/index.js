import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { cntrlGetAllTask } from '../../../stateManagment/actions/tasksActions';



const Task = ({ tasksData : { isLoading, data }, getTasks }) => {

    useEffect(() => {
        getTasks()
    }, []);


    return (
        <div>
            {/* {
                data.map(task => (
                    <li>{task.name}</li>
                ))
            } */}
        </div>
    )
}


const mapStateToProps = state => ({
    tasksData: state.tasks.tasks,
});

const mapDispatchToPorps = {
    getTasks: cntrlGetAllTask 
};


export default connect(mapStateToProps, mapDispatchToPorps)(Task);