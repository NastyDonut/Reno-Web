import React from 'react';

import { Router } from "@reach/router";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ProfilePage from "../ProfilePage";
// import PasswordReset from "./PasswordReset";
  // <PasswordReset path = "passwordReset" />




const App = () => {
  const user = null;


  return (
    user ?
    <ProfilePage />
  :
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />

    </Router>

  );
};

export default App;
