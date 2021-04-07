import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import axios from "axios";
import {useCookies} from "react-cookie";
import {Navbar, Nav, Form, Button, Container} from 'react-bootstrap';
import Quiz from "./components/Quiz/Quiz";
import Question from "./components/Question/Question";
import {Router} from '@reach/router';


export default function App() {
    const [player, setPlayer] = useState({player_name: "", player_password: ""});
    const [cookies, setCookie, removeCookie] = useCookies(['td06']);

    async function createAccount(e) {
        e.preventDefault();

        try {
            await axios.post('/signup', player);
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
                <Navbar className="mb-5" bg="dark" variant="dark" style={{borderRadius: '3px'}}>
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
        <>
            <h3 style={{textAlign: 'center'}}>Veuillez vous authentifier</h3>

            <div style={styles.form}>
                <Form onSubmit={signIn} method="post" style={{display: 'inline-block', alignItems: 'center'}}>
                    <Form.Group>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Nom"
                                      value={player.player_name}
                                      onChange={e => setPlayer({...player, player_name: e.target.value})}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Mot de passe"
                                      value={player.player_password}
                                      onChange={e => setPlayer({...player, player_password: e.target.value})}
                        />
                        <Form.Text className="text-muted">
                            Vos informations sont sécurisées !
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Valider
                    </Button>
                </Form>
            </div>
        </>
    );
}

const styles = {
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}
