
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import SearchAnimals from './pages/AnimalSearch/SearchAnimals';
import Animals from './pages/Animals/Animals';
import Badge from './components/Badge/Badge';


import Header from './components/materialHeader/Header';

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
