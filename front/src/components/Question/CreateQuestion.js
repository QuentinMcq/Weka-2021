import {Form} from "react-bootstrap";
import {Link} from "@reach/router";
import {useState} from "react";
import axios from "axios";
import {quiz_id} from "../Quiz/Quiz"


export default function CreateQuestion() {
    const [question, setQuestion] = useState({
        quiz_id: quiz_id,
        sentence: "",
        answer_1: "",
        answer_2: "",
        answer_3: "",
        answer_4: "",
        correct_answer: "",
        nb_points: ""
    });

    const checkValues = () => question.quiz_id.length === 0 || question.sentence.length === 0 || question.answer_1.length === 0 ||
        question.answer_2.length === 0 || question.answer_3.length === 0 || question.answer_4.length === 0 ||
        question.correct_answer.length === 0 || question.nb_points.length === 0;

    async function createQuestion() {
        try {
            await axios.post('/create_question', question);
        } catch (err) {
            alert("Veuillez entrer des propositions valides !");
        }
    }

    return (
        <div id="form-container">
            <Form>
                <Form.Group>
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Question"
                        value={question.sentence}
                        onChange={e => setQuestion({...question, sentence: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Réponse 1</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Réponse 1"
                        value={question.answer_1}
                        onChange={e => setQuestion({...question, answer_1: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Réponse 2</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Réponse 2"
                        value={question.answer_2}
                        onChange={e => setQuestion({...question, answer_2: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Réponse 3</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Réponse 3"
                        value={question.answer_3}
                        onChange={e => setQuestion({...question, answer_3: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Réponse 4</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Réponse 4"
                        value={question.answer_4}
                        onChange={e => setQuestion({...question, answer_4: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Réponse correcte</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Réponse correcte"
                        value={question.correct_answer}
                        onChange={e => setQuestion({...question, correct_answer: e.target.value})}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Points</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Points"
                        value={question.nb_points}
                        onChange={e => setQuestion({...question, nb_points: e.target.value})}
                    />
                </Form.Group>

                <Link to={`/quiz`}>
                    <button
                        className="btn btn-success mr-3"
                        onClick={createQuestion}
                        disabled={(checkValues() === true)}
                    >
                        Créer la question !
                    </button>
                </Link>
            </Form>
        </div>
    )
}