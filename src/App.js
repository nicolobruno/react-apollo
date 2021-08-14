import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/countries" component={Countries} />
        <Route path="/country/:code" component={Country} />
      </Switch>
    </Router>
  );
}

export default App;
