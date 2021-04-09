import {Form, Row, Col} from "react-bootstrap";
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

    async function createQuestion(e) {
        let questionText = document.getElementById('question-text');
        e.preventDefault();

        try {
            questionText.innerHTML = "Question créé avec succès !"
            questionText.style.fontWeight = 'bold';
            questionText.style.color = 'green';
            await axios.post('/create_question', question);
        } catch (err) {
            alert("Veuillez entrer des propositions valides !");
        }
    }

    return (
        <div className="form-container">
            <Form className="form-style p-5">
                <h2 className="mb-5 text-center">Création d'une question</h2>

                <Row className='justify-content-center'>
                    <Col>
                        <Form.Group>
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Question"
                                value={question.sentence}
                                onChange={e => setQuestion({...question, sentence: e.target.value})}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label>Points</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Points"
                                value={question.nb_points}
                                onChange={e => setQuestion({...question, nb_points: e.target.value})}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Réponse 1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Réponse 1"
                                value={question.answer_1}
                                onChange={e => setQuestion({...question, answer_1: e.target.value})}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label>Réponse 2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Réponse 2"
                                value={question.answer_2}
                                onChange={e => setQuestion({...question, answer_2: e.target.value})}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label>Réponse 3</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Réponse 3"
                                value={question.answer_3}
                                onChange={e => setQuestion({...question, answer_3: e.target.value})}
                            />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group>
                            <Form.Label>Réponse 4</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Réponse 4"
                                value={question.answer_4}
                                onChange={e => setQuestion({...question, answer_4: e.target.value})}
                            />
                        </Form.Group>
                    </Col>

                    <Col className="mb-4">
                        <Form.Group>
                            <Form.Label>Réponse correcte</Form.Label>
                            <Form.Control
                                as="select"
                                placeholder="Réponse correcte"
                                value={question.correct_answer}
                                onChange={e => setQuestion({...question, correct_answer: e.target.value})}
                            >
                                <option>{question.answer_1}</option>
                                <option>{question.answer_2}</option>
                                <option>{question.answer_3}</option>
                                <option>{question.answer_4}</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <div className="mt-5">
                    <button
                        className="btn btn-success mr-3"
                        onClick={createQuestion}
                        disabled={(checkValues() === true)}
                    >
                        Créer la question !
                    </button>

                    <Link to={`/quiz/${question.quiz_id}`} className="btn btn-secondary">Retour</Link>
                </div>

                <div id="question-text"></div>
            </Form>
        </div>
    )
}