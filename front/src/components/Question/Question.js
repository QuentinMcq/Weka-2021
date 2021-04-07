import {useState, useEffect} from "react";
import axios from "axios";
import {Container, Row, Col} from "react-bootstrap";

export default function Question(props) {
    const [question, setQuestion] = useState([]);

    async function getQuestion() {
        let data = [];
        let id = props.id;
        try {
            data = (await axios.get("http://localhost:8000/quiz/" + id)).data;
            console.log(data)
        } catch (err) {
            alert(err);
        } finally {
            setQuestion(data);
        }
    }

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <Container style={{textAlign: 'center'}}>
            <>
                {question.map((question, index) =>
                    <Container key={index} style={{marginTop: '5%'}}>
                        <h3 style={{textDecoration: 'underline'}}>Question {index + 1}
                            <span style={{fontWeight: 'bold'}}> ({question.nb_points} points)</span>
                        </h3>
                        <br/>
                        <h4>{question.sentence}</h4>
                        <br/>

                        <Container>
                            <Row className='justify-content-center'>
                                <Col md="auto">
                                    {question.answer_1 !== null ? (
                                        <>
                                            <input type="checkbox" id="answer_1" name="answer_1"/>
                                            &nbsp;

                                            {question.answer_1.includes('https') ?
                                                <img src={question.answer_1} alt='answer_1'/> :
                                                <span>{question.answer_1}</span>
                                            }
                                        </>
                                    ) : ''}
                                </Col>

                                <br/>

                                <Col md="auto">
                                    {question.answer_2 !== null ? (
                                        <>
                                            <input type="checkbox" id="answer_2" name="answer_2"/>
                                            &nbsp;

                                            {question.answer_2.includes('https') ?
                                                <img src={question.answer_2} alt='answer_2'/> :
                                                <span>{question.answer_2}</span>
                                            }
                                        </>
                                    ) : ''}
                                </Col>
                            </Row>
                        </Container>

                        <br/>

                        <Container>
                            <Row className='justify-content-center'>
                                <Col md="auto">
                                    {question.answer_3 !== null ? (
                                        <>
                                            <input type="checkbox" id="answer_3" name="answer_3"/>
                                            &nbsp;
                                            {question.answer_3.includes('https') ?
                                                <img src={question.answer_3} alt='answer_3'/> :
                                                <span>{question.answer_3}</span>
                                            }
                                        </>
                                    ) : ''}

                                </Col>

                                <br/>

                                <Col md="auto">
                                    {question.answer_4 !== null ? (
                                        <>
                                            <input type="checkbox" id="answer_4" name="answer_4"/>
                                            &nbsp;

                                            {question.answer_4.includes('https') ?
                                                <img src={question.answer_4} alt='answer_4'/> :
                                                <span>{question.answer_4}</span>
                                            }
                                        </>
                                    ) : ''}

                                </Col>
                            </Row>
                        </Container>

                    </Container>
                )}
            </>
        </Container>
    );
}


