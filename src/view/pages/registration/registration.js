import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import {cntrlRegistration} from "../../../stateManagment/actions/registrationAction"
import { useHistory } from 'react-router';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" />   
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 const Register = ({registration}) => {
  const history = useHistory();
  const classes = useStyles();
  //name validation
  const [name, setName]  = useState('');
  const [nameDirty, setNameDirty] = useState('');
  const [nameError, setNameError] = useState('Enter your name')
  //password validation
  const [password, setPassword] = useState('');
  const [passwordDirty, setPasswordDirty] = useState('');
  const [passwordError, setPasswordError] = useState('Write your password')  
  //email
  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState('');
  const [emailError, setEmailError] = useState('Write Your email');
  //age validation
  const [age, setAge] = useState('');
  const [ageDirty, setAgeDirty] = useState('');
  const [ageError, setAgeError] = useState('Write Your age');

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    age: "",
  })

  const handleRegistration = (e) => {
    e.preventDefault();
    registration(values)
    .then(resp => {
      if (resp.token) {
          history.push('/login');
      }
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
   
   
  }
  const changeName = (e) => {
    setName(e.target.value)
    const nameRegex = /^\S[\S ]{2,98}\S$/;
    if(!nameRegex.test(String(e.target.value))) {
      setNameError('Write your name')
    } else {
      setNameError('');
    };
  }
  const changePassword = (e) => {
    setPassword(e.target.value)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(!passwordRegex.test(String(e.target.value))) {
      setPasswordError('Try again')
    }else {
      setPasswordError('')
    }
  }
  const changeEmail = (e) => {
  
    setEmail(e.target.value)
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    if(!emailRegex.test(String(e.target.value))) {
      setEmailError('invalid e-mail')
    } else {
      console.log(123111)
      setEmailError('')
    }
  }
  const changeAge = (e) => {
    const ageRegex = /^100|[1-9]?\d$/;
    if(!ageRegex.test(String(e.target.value))) {
      setAgeError('Age can not contain letters and simbols:')
    } else {
      setAgeError('')
    }
  }

  const blurHandler = (e) => {
    switch(e.target.name) {
      case 'name': 
        setNameDirty(true);
        break;
      case 'password':
        setPasswordDirty(true)
        break;
      case 'email': 
        setEmailDirty(true)
        break;
      case 'age': 
        setAgeDirty(true)
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <HowToRegIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form className={classes.form}  onSubmit={handleRegistration}>
          {(nameDirty && nameError) && <div style={{color: 'red'}}> {nameError} </div> }
        <TextField
            onBlur={e => blurHandler(e)}
            value={name}
            variant="outlined"
            margin="normal"
            placeholder="Enter your name"
            required
            fullWidth
            id="name"
            onChange={handleInputChange, changeName}
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          {(emailDirty && emailError) && <div style={{color: 'red'}}> {emailError} </div> }
          <TextField
            onBlur={e => blurHandler(e)}
            variant="outlined"
            margin="normal"
            placeholder="Enter your email"
            required
            fullWidth
            id="email"
            label="Email Address"
            onChange={handleInputChange, changeEmail}
            name="email"
            autoComplete="email"
            autoFocus
          />
            {(passwordDirty && passwordError) && <div style={{color: 'red'}}> {passwordError} </div> }
          <TextField
            onBlur={e => blurHandler(e)}
            value={password}
            variant="outlined"
            margin="normal"
            placeholder="Enter your password"
            required
            fullWidth
            name="password"
            onChange={handleInputChange, changePassword}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {(ageDirty && ageError) && <div style={{color: 'red'}}> {ageError} </div> }
          <TextField
            onBlur={e => blurHandler(e)}
            variant="outlined"
            margin="normal"
            placeholder="Enter your age"
            required
            fullWidth
            id="age"
            onChange={handleInputChange, changeAge}
            label="Age"
            name="age"
            autoComplete="age"
            autoFocus
          />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Registretion
            </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  registration: cntrlRegistration
};

export default connect(mapStateToProps, mapDispatchToProps)(Register)