import './App.css';
import {Link, Router} from "@reach/router";
import Quiz from './components/Quiz/Quiz';
import Question from './components/Quiz/Questions';


function App() {
  return (
      <div className="App">
        <nav id="navbar">
            <Link className="navLink" to="/">Accueil | </Link>
          <Link className="navLink" to="/quiz">Quiz | </Link>
        </nav>

        <Router>
          <Quiz path="/quiz"/>
          <Question path="/question"/>
        </Router>
      </div>
  );
}

export default App;
