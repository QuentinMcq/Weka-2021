import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import axios from "axios";
import {useCookies} from "react-cookie";
import {Navbar, Nav} from 'react-bootstrap';


export default function App() {
    const [player, setPlayer] = useState('');
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
        console.log("test ", player.name);

        try {
            const response = (await axios.post('/token', player));
            const data = {
                name: player.name, token: response.data.token
            }
            setCookie('td06', data, '/');

        } catch (err) {
            alert("err : " + err);
        }
    }

    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = (cookies.td06 ? 'Bearer ' + cookies.td06.token : null);
    }, [cookies.td06]);

    if (cookies && cookies.td06) {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Quiz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Accueil</Nav.Link>
                            <Nav.Link href="/quiz">Quiz</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div className="container">
                    <div className="row">hello {cookies.td06.name} !!</div>
                    <div className="row">
                        <button className="btn btn-danger" onClick={() => removeCookie('td06')}>Déconnexion</button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <h1>Pour profiter du site, connectez-vous !</h1>

            <form onSubmit={signIn} method="post">
                <div>
                    Username
                    <input
                        type="text"
                        value={player.name}
                        onChange={e => setPlayer({...player, name: e.target.value})}
                    />
                </div>
                <div>
                    Password
                    <input
                        type="password"
                        value={player.password}
                        onChange={e => setPlayer({...player, name: e.target.value})}
                    />
                </div>
                <div>
                    <button type="submit">Valider</button>
                </div>
            </form>
        </>
    );
}
