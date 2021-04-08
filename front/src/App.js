import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import axios from "axios";
import {useCookies} from "react-cookie";
import {Navbar, Nav, Form, Container} from 'react-bootstrap';
import Quiz from "./components/Quiz/Quiz";
import Question from "./components/Question/Question";
import CreateQuiz from "./components/Quiz/CreateQuiz";
import {Router, Link} from '@reach/router';
import CreateQuestion from "./components/Question/CreateQuestion";

export default function App() {
    const [player, setPlayer] = useState({name: "", password: ""});
    const [cookies, setCookie, removeCookie] = useCookies(['td06']);

    const checkCredential = () => player.name.length === 0 || player.password.length < 8;

    async function createAccount(e) {
        let accountText = document.getElementById("account-text");
        e.preventDefault();

        try {
            await axios.post('/signup', player);
            console.log(player)
            accountText.innerHTML = "Compté créé !"
        } catch (err) {
            alert(err);
        }
    }

    async function signIn(e) {
        e.preventDefault();

        try {
            const response = (await axios.post('/token', player));
            const data = {
                name: player.name,
                token: response.data.token
            }
            setCookie('td06', data, '/');

        } catch (err) {
            alert("Nom ou mot de passe invalide");
        }
    }

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
        <div id="form-container">
            <Form id="form-style" className="p-5" onSubmit={signIn} method="post">
                <h4 className="text-center font-weight-bold mb-5">Veuillez vous authentifier</h4>
                <Form.Group>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nom"
                        value={player.name}
                        onChange={e => setPlayer({...player, name: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Mot de passe"
                        value={player.password}
                        onChange={e => setPlayer({...player, password: e.target.value})}
                    />
                    <Form.Text className="text-muted">
                        Vos informations sont sécurisées !
                    </Form.Text>
                </Form.Group>

                <div className="mt-5">
                    <button
                        className="btn btn-primary mr-3"
                        type="submit"
                    >
                        Valider
                    </button>

                    <button
                        className="btn btn-success mr-3"
                        onClick={createAccount}
                        disabled={checkCredential() === true}
                    >
                        Créer un compte
                    </button>
                    <div id="account-text"/>
                </div>
            </Form>
        </div>
    );
}