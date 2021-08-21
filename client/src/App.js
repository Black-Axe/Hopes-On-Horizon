
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from './pages/Home';
import SearchAnimals from './pages/SearchAnimals';
import Animals from './pages/Animals';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchAnimals} />
        <Route path="/animals" component={Animals} />
      </Switch>
    </Router>

  );
}

export default App;
