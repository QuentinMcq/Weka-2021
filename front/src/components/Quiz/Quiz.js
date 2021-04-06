import {useState, useEffect} from "react";
import axios from "axios";

export default function Quiz() {
    const [quiz, setQuiz] = useState([]);

    async function getQuiz() {
        let data = [];

        try {
            data = (await axios.get('http://localhost:8000/quiz')).data;
            console.log(data)
        } catch (err) {
            alert(err);
        } finally {
            setQuiz(data);
        }
    }

    useEffect(() => {
        getQuiz()
            .then(r => console.log(r))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div>Quiz</div>

            <ul>
                {quiz.map((quiz, index) =>
                    <li key={index}>
                        ID : {quiz.quiz_id}<br/>
                        {quiz.name} <br/>
                        <img src={quiz.image} alt="image"/>
                    </li>
                )}
            </ul>
        </>
    );
}