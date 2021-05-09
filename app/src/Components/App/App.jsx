import React from 'react';

import { Router } from "@reach/router";
import UserProvider from '../providers/UserProvider';
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ProfilePage from "../ProfilePage";
import PassReset from "../PassReset";




const App = () => {
  const user = null;

  return (
    <UserProvider>
      user ?
      <ProfilePage />
    :
      <Router>
        <SignUp path="signUp" />
        <SignIn path="/" />
        <PassReset path = "passwordReset" />

      </Router>
    </UserProvider>
  );
};

export default App;
