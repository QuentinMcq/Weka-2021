import {Form} from "react-bootstrap";
import axios from "axios";

export default function CreateAccount(props) {
    const checkCredential = () => props.player.name.length === 0 || props.player.password.length < 8;

    async function createAccount(e) {
        e.preventDefault();

        try {
            await axios.post('/signup', props.player);
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div id="form-container">
            <Form
                id="form-style"
                className="p-5"
                onSubmit={createAccount}
                method="post"
            >
                <h4 className="text-center font-weight-bold mb-5">Créer un compte</h4>
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
                        Votre mot de passe doit comporter 8  caractères minimum
                    </Form.Text>
                </Form.Group>

                <div className="mt-5">
                    <button
                        className="btn btn-primary mr-3"
                        type="submit"
                        disabled={(checkCredential() === true)}
                    >
                        Valider
                    </button>
                </div>
            </Form>
        </div>
    );
}