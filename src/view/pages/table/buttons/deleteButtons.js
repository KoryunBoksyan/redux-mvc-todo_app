import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { cntrlDeleteTask, cntrlGetAllTask } from '../../../../stateManagment/actions/tasksActions';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function DeleteButton({taskId}) {
  const classes = useStyles();

  const dispatch = useDispatch();
  
  const handleDelete = async () => {
    await dispatch(cntrlDeleteTask(taskId));
    dispatch(cntrlGetAllTask())
  }

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={handleDelete}
      >
        Delete
      </Button>
    </div>
  );
}

