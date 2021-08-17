
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from './pages/Home';
import SearchAnimals from './pages/SearchAnimals';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchAnimals} />
      </Switch>
    </Router>

  );
}

export default App;
