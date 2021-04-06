import './App.css';
import {Link, Router} from "@reach/router";
import Quiz from './components/Quiz/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
    return (
        <>
            <div className="App">
                <nav id="navbar" style={{marginBottom: '2%'}}>
                    <Link className="navLink" to="/">Accueil | </Link>
                    <Link className="navLink" to="/quiz">Quiz | </Link>
                </nav>

                <Router>
                    <Quiz path="/quiz"/>
                </Router>
            </div>
        </>
    );
}
