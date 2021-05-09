import React, { useState } from "react";
import { Link } from "@reach/router";

import { auth } from "../firebase/firebase";
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper,
  Box, Grid, Typography, makeStyles
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  error: {
    color: "red",
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  subheader: {
    margin: theme.spacing(3, 0, 2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const PassReset = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("Sent email");
        setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };

  return (
    <div className={classes.paper}>
      <h1 className="text-xl text-center font-bold mb-3">
        Reset your Password
      </h1>
      <Typography className={classes.subheader} component="h5" variant="h10">
        Need to perform a total renovation on your Password? Not a problem!
      </Typography>
      <div className="border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        <form className={classes.form} action="">
          {emailHasBeenSent && (
            <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div className={classes.error}>
              There was an issue resetting your password.
              Verify your email address and try again
            </div>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
            label="Email Address"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={event => {
              sendResetEmail(event);
            }}
          >
            Send me a reset link
          </Button>
        </form>
        <Link
         to ="/"
          className="my-2 text-blue-700 hover:text-blue-800 text-center block"
        >
          &larr; back to sign in page
        </Link>
      </div>
    </div>
  );
};

export default PassReset;
