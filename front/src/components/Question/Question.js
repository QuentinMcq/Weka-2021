import {useState, useEffect} from "react";
import axios from "axios";
import {Container} from "react-bootstrap";
import CheckQuestion from "./CheckQuestion";

export default function Question(props) {
    const [questions, setQuestions] = useState([]);

    async function getQuestion() {
        let data = [];
        let id = props.id;

        try {
            data = (await axios.get("/quiz/" + id)).data;
        } catch (err) {
            alert(err);
        } finally {
            setQuestions(data);
        }
    }

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <Container style={{textAlign: 'center'}}>
            {questions.map((question, index) =>
                <Container key={index} style={{marginTop: '5%'}}>
                    <h3 style={{textDecoration: 'underline'}}>Question {index + 1}
                        <span className="font-weight-bold"> ({question.nb_points} points)</span>
                    </h3>
                    <br/>
                    <h4>{question.sentence}</h4>
                    <br/>

                    <CheckQuestion questions={question}/>
                </Container>
            )}
        </Container>
    );
}


