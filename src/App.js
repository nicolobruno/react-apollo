import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useReducer } from 'react';
import './App.css';
import Characters from './components/Characters'
import { GlobalContext, globalState } from './context'
import  { globalReducer } from './context/reducer'

function App() {
  return (  
    <GlobalContext.Provider value={useReducer(globalReducer, globalState)} >
      <Router>
        <Switch>
          <Route path="/characters" component={Characters} />
        </Switch>
      </Router>
  </GlobalContext.Provider>
  );
}

export default App;
