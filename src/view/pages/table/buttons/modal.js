import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { cntrlAddTask } from '../../../../stateManagment/actions/tasksActions';
import { connect } from 'react-redux';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SimpleModal({open, onClose, addTask }) {
  const classes = useStyles();
  const [value, setValue] = useState("")
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleChangeInput = (evt) => {
    setValue(evt.target.value);
    console.log(evt.target.value);
  };

  const handleSave = (evt) => {
    evt.preventDefault();
    // const fetchContentModel = {
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // const methodType = this.props.intern?.id ? "PUT" : "POST";
    
    addTask(value)
  };


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Enter Your Task</h2>
      <input onChange={handleChangeInput} />
      <button onClick={handleSave}>Save</button>
    </div>
  );

  

  return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  );
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = {
  addTask: cntrlAddTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleModal);