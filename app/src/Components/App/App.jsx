import React from 'react';

import UserProvider from '../../providers/UserProvider';
import Application from '../Application';




const App = () => {

  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
};

export default App;
