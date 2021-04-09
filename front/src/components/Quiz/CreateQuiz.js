import {Form} from "react-bootstrap";
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "@reach/router";

export default function CreateQuiz() {
    const [quiz, setQuiz] = useState({
        name: "",
        image: "",
        theme: ""
    });
    const [themes, setThemes] = useState([]);
    const checkValues = () => quiz.name.length === 0 || quiz.image.length === 0 || quiz.theme.length === 0;

    async function getTheme() {
        let theme = [];

        try {
            theme = (await axios.get('/theme')).data;
        } catch (err) {
            alert(err);
        } finally {
            setThemes(theme);
        }
    }

    async function createQuiz(e) {
        let quizText = document.getElementById('quiz-text');
        e.preventDefault();

        try {
            quizText.innerHTML = "Quiz créé avec succès !"
            quizText.style.fontWeight = 'bold';
            quizText.style.color = 'green';
            await axios.post('/create_quiz', quiz);
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => {
        getTheme();
    }, []);

    return (
        <div className="form-container">
            <Form className="p-4 form-style">
                <h3 className="text-center mb-4">Création de quiz</h3>
                <Form.Group>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nom"
                        value={quiz.name}
                        onChange={e => setQuiz({...quiz, name: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Image"
                        value={quiz.image}
                        onChange={e => setQuiz({...quiz, image: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Theme</Form.Label>
                    <Form.Control
                        as="select"
                        value={quiz.theme}
                        onChange={e => setQuiz({...quiz, theme: e.target.value})}
                    >
                        {themes.map((item) =>
                            <option>{item.name}</option>
                        )}
                    </Form.Control>
                </Form.Group>

                <div className="mt-5">
                    <button
                        className="btn btn-success mr-3"
                        disabled={(checkValues() === true)}
                        onClick={createQuiz}
                    >
                        Créer le quiz !
                    </button>

                    <Link to='/quiz' className="btn btn-secondary">Retour</Link>
                </div>

                <div id="quiz-text"></div>
            </Form>
        </div>
    )
}