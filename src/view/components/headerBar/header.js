import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cntrlLogOut } from '../../../stateManagment/actions/loginAction';


const useStyles = makeStyles ( ( theme ) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
}));

export default function HeaderBar() {
  const classes = useStyles();
  const history = useHistory();
  const isAuth = useSelector((store) => store.auth );
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(cntrlLogOut())
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ToDo App
          </Typography>
          {
            isAuth ?
              <Button color="inherit" onClick={handleLogout}>Log Out</Button>
            :
              <>
                <Button color="inherit" onClick={() => {history.push('/login')}}>Login</Button>
                <Button color="inherit" onClick={() => {history.push('/register')}}>Register</Button>
              </>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}