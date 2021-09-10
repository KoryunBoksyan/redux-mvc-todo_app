import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Modal from './modal';
import { cntrlPutTask } from '../../../../stateManagment/actions/tasksActions';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "green"

  },
}));

export default function EditButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  
  const handleOk = (value) => {
    console.log(value);
    dispatch(cntrlPutTask(value));
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<EditIcon />}
        onClick={() => setOpen(true)}
      >
        Edit
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} oktext='Edit' onOk={handleOk} />
    </div>
  );
}
