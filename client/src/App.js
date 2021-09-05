
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import SearchAnimals from './pages/AnimalSearch/SearchAnimals';
import Animals from './pages/Animals/Animals';

import AnimalProfile from './pages/AnimalProfile/AnimalProfile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchAnimals} />
        <Route exact path="/animals" component={Animals} />
        <Route exact path="/animal" component={AnimalProfile} />
        
        <Route  exact path="/animal/:animalId" component={AnimalProfile} />
      </Switch>
    </Router>

  );
}

export default App;
