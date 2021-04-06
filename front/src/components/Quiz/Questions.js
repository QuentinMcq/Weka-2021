import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "@reach/router";

export default function Quiz() {
    const [searchTerm, setSearchTerm] = useState("");
    const [question, setQuestion] = useState([]);

    let handleChange = e => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        /*const results = quiz.filter(q => {
                console.log(searchTerm);
                //console.log(q.key_word_id);
                return String(q.key_word_id) === String(searchTerm)
            }
        );*/
        /*if (results.length === 0)*/
        getQuestion();
        //else setQuestion(results);
    }, [searchTerm])

    async function getQuestion() {
        let data = [];

        try {
            data = (await axios.get('http://localhost:8000/question')).data;
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
        <>
            <div>Quiz {question.quiz_id}</div>

            <ul>
                {question.map((question, index) =>
                    <li key={index}>
                        ID : {question.question_id}<br/>
                        {question.sentence} <br/>
                        <img src={question.image} alt="img-quiz"/><br/>

                        {question.answer_1} <br/>
                        {question.answer_2} <br/>
                        {question.answer_3} <br/>
                        {question.answer_4} <br/>
                        {question.nb_points}<br/>
                    </li>
                )}
            </ul>
        </>

    );
}