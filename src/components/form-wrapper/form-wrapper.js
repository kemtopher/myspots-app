import React, { useReducer, useState } from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import { FormAuth } from '../form-auth/form-auth';

const initialState = {
  email: '',
  username: '',
  password: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_USERNAME':
      return { ...state, username: action.payload };
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const FormWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formType, setFormType] = useState('login');

  const classes = {
    container: {
      height: '100%',
      minHeight: '100vh'
    },
    splash: {
      height: '100%',
      width: '100%',
      background: 'var(--primary-30)'
      // backgroundImage: `url(${Splash})`,
      // backgroundSize: "cover"
    },
    formContainer: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    boxStyles: {
      maxWidth: '350px'
    }
  };

  const setEmail = (event) => {
    dispatch({ type: 'UPDATE_EMAIL', payload: event.target.value });
  };

  const setUsername = (event) => {
    dispatch({ type: 'UPDATE_USERNAME', payload: event.target.value });
  };

  const setPassword = (event) => {
    dispatch({ type: 'UPDATE_PASSWORD', payload: event.target.value });
  };

  const handleSubmit = () => {
    if (formType === 'login') {
      console.log('User logged in');
    } else if (formType === 'signup') {
      console.log('User Registerd');
    }
  };

  const handleFormType = () => {
    if (formType === 'login') {
      setFormType('signup');
      //   history.push('signup');
    } else {
      setFormType('login');
      //   history.push('login');
    }
  };

  if (loading) {
    return (
      <div className="inflight-wrapper">
        <h1>Loading ...</h1>
        <div className="spinner-gif">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Grid container sx={classes.container}>
        <Grid item xs={12} md={6}>
          <Box sx={classes.splash}></Box>
        </Grid>
        <Grid item xs={12} md={6} sx={classes.formContainer}>
          <Box sx={classes.boxStyles}>
            <Typography variant="h3">
              {formType === 'login' ? 'Sign In' : 'Sign Up'}
            </Typography>
            <Typography variant="h5">
              {formType === 'signup'
                ? "Let's go ahead and get you registered"
                : 'Signin to discover your next spot'}
            </Typography>
            <FormAuth
                email={state.email}
              setEmail={setEmail}
                username={state.username}
              setUsername={setUsername}
              password={state.password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
            />
            <Typography variant="subtitle1">
              {formType === 'login' ? 'Not a member yet?' : 'Already a member?'}
            </Typography>
            <Link
              component="button"
              variant="subtitle1"
              onClick={handleFormType}
            >
              {formType === 'signup'
                ? "Go signup" :
                "Register new account"}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
