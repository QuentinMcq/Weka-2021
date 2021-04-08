import {Form} from "react-bootstrap";
import axios from "axios";
import {Link} from '@reach/router';

export default function SignIn(props) {
    async function signIn(e) {
        e.preventDefault();

        try {
            const response = (await axios.post('/token', props.player));
            const data = {
                name: props.player.name,
                token: response.data.token
            }
            props.setCookie('td06', data, '/');

        } catch (err) {
            alert("Nom ou mot de passe invalide");
        }
    }

    return (
        <div className="form-container">
            <Form
                className="form-style p-5"
                onSubmit={signIn}
                method="post"
            >
                <h4 className="text-center font-weight-bold mb-5">Veuillez vous connecter</h4>
                <Form.Group>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nom"
                        value={props.player.name}
                        onChange={e => props.setPlayer({...props.player, name: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Mot de passe"
                        value={props.player.password}
                        onChange={e => props.setPlayer({...props.player, password: e.target.value})}
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

                    <Link
                        to='/create_account'
                        className="btn btn-success mr-3"
                    >
                        Créer un compte
                    </Link>
                </div>
            </Form>
        </div>
    );
}