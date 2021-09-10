import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Modal from "./modal";
import { useDispatch } from 'react-redux';
import { cntrlAddTask } from '../../../../stateManagment/actions/tasksActions';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AddButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOk = (value) => {
    dispatch(cntrlAddTask(value))
  };

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        ADD
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} onOk={handleOk} />
    </div>
  );
}
