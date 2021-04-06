import './App.css';
import {Link, Router} from "@reach/router";
import Quiz from './components/Quiz/Quiz';


function App() {
  return (
      <div className="App">
        <nav id="navbar">
            <Link className="navLink" to="/">Accueil | </Link>
          <Link className="navLink" to="/quiz">Quiz | </Link>
        </nav>

        <Router>
          <Quiz path="/quiz"/>
        </Router>
      </div>
  );
}

export default App;
