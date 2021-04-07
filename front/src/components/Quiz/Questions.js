import {useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "@reach/router";

export default function Question(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [question, setQuestion] = useState([]);
    //let { id } = useParams();
    console.log(props.id);
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
        let id =props.id;
        try {
            data = (await axios.get("http://localhost:8000/quiz/"+id)).data;
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
                        Question : {question.question_id}<br/>
                        {question.sentence} <br/>
                        <img src={question.image} alt="img-quiz"/><br/>
                        <input type="checkbox" id="answer_1" name="answer_1"/> <label>{question.answer_1}</label><br/>
                        <input type="checkbox" id="answer_2" name="answer_2"/> <label>{question.answer_2}</label>  <br/>
                        <input  type="checkbox" id="answer_3" name="answer_3"/><label>{question.answer_3}</label><br/>

                            <input type="checkbox" id="answer_4" name="answer_4"/> <label>{question.answer_4}</label> <br/>

                       Point(s): {question.nb_points}<br/>
                       <br/>
                    </li>
                )}
            </ul>
        </>

    );
}


