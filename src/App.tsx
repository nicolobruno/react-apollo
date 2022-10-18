import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import './App.css';
import Characters from './components/Characters'
import { AppProvider } from './context'

function App() {
  return (  
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/" component={Characters} />
          <Route path="/characters" component={Characters} />
        </Switch>
      </Router>
  </AppProvider>
  );
}

export default App;
