import React from 'react';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';

import Home from "./components/Home.js"
function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
    <React.Fragment>
      <Home />
    </React.Fragment>
    </AppContext.Provider>
  );
}

export default App;
