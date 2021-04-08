import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import {useCookies} from "react-cookie";
import {Navbar, Nav, Container} from 'react-bootstrap';
import Quiz from "./components/Quiz/Quiz";
import Question from "./components/Question/Question";
import CreateQuiz from "./components/Quiz/CreateQuiz";
import {Router, Link} from '@reach/router';
import CreateQuestion from "./components/Question/CreateQuestion";
import SignIn from "./components/Account/SignIn";
import CreateAccount from "./components/Account/CreateAccount";

export default function App() {
    const [player, setPlayer] = useState({name: "", password: ""});
    const [cookies, setCookie, removeCookie] = useCookies(['td06']);

    if (cookies && cookies.td06) {
        return (
            <Container>
                <Navbar className="mb-5" bg="dark" variant="dark" style={{borderRadius: '2px'}}>
                    <Navbar.Brand href="/quiz">QuizNet</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link style={{textDecoration: 'none', color: 'white'}} to="/quiz">Quiz</Link>
                            &nbsp; &nbsp;
                            <Link style={{textDecoration: 'none', color: 'white'}} to="/quiz/create">Créer un
                                quiz</Link>
                        </Nav>
                        <Nav>
                            <Link
                                to='/'
                                className="btn btn-danger"
                                onClick={() => removeCookie('td06')}
                            >
                                Déconnexion
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Router>
                    <Quiz path='/quiz'/>
                    <Question path='/quiz/:id'/>
                    <CreateQuiz path='/quiz/create'/>
                    <CreateQuestion path='/question/create'/>
                </Router>
            </Container>
        )
    }

    return (
        <>
            <Router>
                <SignIn path='/' player={player} setPlayer={setPlayer} setCookie={setCookie}/>
                <CreateAccount path='/create_account' player={player} setPlayer={setPlayer} setCookie={setCookie}/>
            </Router>
        </>
    );
}