import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import axios from "axios";
import {useCookies} from "react-cookie";
import {Navbar, Nav, Form, Button, Container} from 'react-bootstrap';
import Quiz from "./components/Quiz/Quiz";
import Question from "./components/Question/Question";
import Point from "./components/Point/Point";
import {Router} from '@reach/router';

export default function App() {
    const [player, setPlayer] = useState({player_name: "", player_password: ""});
    const [cookies, setCookie, removeCookie] = useCookies(['td06']);

   const checkCredential = () => player.player_name === "" || player.player_password === "";

    async function createAccount(e) {
        e.preventDefault();

        try {
            await axios.post('/signup', {
                name: player.player_name,
                password: player.player_password
            });
            console.log(player)
        } catch (err) {
            alert(err);
        }
    }

    async function signIn(e) {
        e.preventDefault();

        try {
            const response = (await axios.post('/token', player));
            const data = {
                name: player.player_name, token: response.data.token
            }
            setCookie('td06', data, '/logout');

        } catch (err) {
            alert("Nom ou mot de passe invalide");
        }
    }

    if (cookies && cookies.td06) {
        return (
            <Container>
                <Navbar className="mb-5" bg="dark" variant="dark" style={{borderRadius: '2px'}}>
                    <Navbar.Brand href="/home">Quiz</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Accueil</Nav.Link>
                            <Nav.Link href="/quiz">Quiz</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button className="btn btn-danger"
                                    onClick={() => removeCookie('td06')}
                            >
                                Déconnexion
                            </Button>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Router>
                    <Quiz path='/quiz'/>
                    <Question path='/quiz/:id'/>
                </Router>
            </Container>
        )
    }

    return (
        <Container>
            <Navbar className="mb-5" bg="dark" variant="dark" style={{borderRadius: '2px'}}>
                <Navbar.Brand href="/home">Quiz</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Accueil</Nav.Link>
                        <Nav.Link href="/quiz">Quiz</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button className="btn btn-danger"
                                onClick={() => removeCookie('td06')}
                        >
                            Déconnexion
                        </Button>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Router>
                <Quiz path='/quiz'/>
                <Question path='/quiz/:id'/>
                <Point path="/resultat"/>
            </Router>
        </Container>
       /* <div className="form">
            <img src="https://picsum.photos/200" alt="auth-logo"/>
            <Form className="p-4" onSubmit={signIn} method="post">

                <h3 className="text-center mb-5">Veuillez vous authentifier</h3>
                <Form.Group>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nom"
                        value={player.player_name}
                        onChange={e => setPlayer({...player, player_name: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Mot de passe"
                        value={player.player_password}
                        onChange={e => setPlayer({...player, player_password: e.target.value})}
                    />
                    <Form.Text className="text-muted">
                        Vos informations sont sécurisées !
                    </Form.Text>
                </Form.Group>

                <Button
                    className="mr-3"
                    variant="primary"
                    type="submit"
                >
                    Valider
                </Button>

                <Button
                    className="mr-3"
                    variant="success"
                    onClick={createAccount}
                    disabled={checkCredential() === true}
                >
                    Créer un compte
                </Button>
            </Form>
        </div>*/
    );
}