import {useState, useEffect} from "react";
import axios from "axios";
import {Link, Router} from "@reach/router";


export default function Quiz() {
    const [searchTerm, setSearchTerm] = useState("");
    const [quiz, setQuiz] = useState([]);

    let handleChange = e => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const results = quiz.filter(q => {
                console.log(searchTerm);
                console.log(q.key_word_id);
                return String(q.key_word_id) === String(searchTerm)
            }
        );
        if (results.length === 0) getQuiz();
        else setQuiz(results);
    }, [searchTerm])

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
        getQuiz();
    }, []);

    return (
        <>
            <div>Quiz</div>

            <label>Recherche : </label>
            <input id="search" value={searchTerm} onChange={handleChange} type="text"/>

            <ul>
                {quiz.map((quiz, index) =>
                    <li key={index}>
                        ID : {quiz.quiz_id}<br/>
                        <Link className="navLink" to={`/quiz/${quiz.quiz_id}`}>Accéder au quiz </Link>
                        <a>{quiz.name} </a><br/>
                        <img src={quiz.image} alt="img-quiz"/><br/>
                        {quiz.key_word_id}<br/>
                    </li>
                )}
            </ul>
        </>
    );
}