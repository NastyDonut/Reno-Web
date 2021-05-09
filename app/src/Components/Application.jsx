import React from 'react';
import { Router } from "@reach/router";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PassReset from "./PassReset";


const Application = () => {
  const user = null;

  return (
    user ?
    <ProfilePage />
  :
    <Router>
      <SignUp path="signUp" />
      <SignIn path="/" />
      <PassReset path = "passwordReset" />

    </Router>
  )
};

export default Application;
