import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import './App.css';
import Characters from './screens/Characters';
import Character from './screens/Character';
import { AppProvider } from './context';

function App() {
  return (  
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Characters} />
          <Route path="/characters" exact component={Characters} />
          <Route path="/character/:id" exact component={Character} />
        </Switch>
      </Router>
  </AppProvider>
  );
}

export default App;
