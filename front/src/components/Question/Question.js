import {useState, useEffect} from "react";
import axios from "axios";
import {Container} from "react-bootstrap";

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
            <div>Quiz {question.quiz_id}</div>

            <ul>
                {question.map((question, index) =>
                    <li key={index} style={{marginTop: '5%'}}>
                        <span>Question : {question.question_id}</span><br/>
                        <span>{question.sentence}</span><br/>
                        <img src={question.image} alt="img-quiz"/><br/>

                        {question.answer_1 !== null ? (
                            <>
                                <input type="checkbox" id="answer_1" name="answer_1"/>
                                &nbsp;
                                <label>{question.answer_1}</label><br/>
                            </>
                        ) : ''}

                        {question.answer_2 !== null ? (
                            <>
                                <input type="checkbox" id="answer_2" name="answer_2"/>
                                &nbsp;
                                <label>{question.answer_2}</label>
                                <br/>
                            </>
                        ) : ''}

                        {question.answer_3 !== null ? (
                            <>
                                <input type="checkbox" id="answer_3" name="answer_3"/>
                                &nbsp;
                                <label>{question.answer_3}</label>
                                <br/>
                            </>
                        ) : ''}

                        {question.answer_4 !== null ? (
                            <>
                                <input type="checkbox" id="answer_4" name="answer_4"/>
                                &nbsp;
                                <label> {question.answer_4}</label>
                                <br/>
                            </>
                        ) : ''}


                        <span>Point(s): {question.nb_points}</span>
                    </li>
                )}
            </ul>
        </Container>
    );
}


