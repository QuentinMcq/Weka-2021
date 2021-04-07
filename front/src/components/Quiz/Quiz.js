import {useState, useEffect} from "react";
import axios from "axios";

export default function Quiz() {
    const [searchTerm, setSearchTerm] = useState("");
    const [quiz, setQuiz] = useState([]);

    let handleChange = e => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const results = quiz.filter(q => String(q.key_word_id) === String(searchTerm));

        // Reload quiz data if result is null
        results.length === 0 ? getQuiz() : setQuiz(results);
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
            <label>Recherche  </label>
            <input id="search" value={searchTerm} onChange={handleChange} type="text"/>
            <ul>
                {quiz.map((quiz, index) =>
                    <li key={index} className={"quiz"}>
                        <div className="col d-flex justify-content-center">
                        <div className="card">
                            <img className="image" src={quiz.image} alt="img-quiz"/><br/>
                            <div className="card-body">
                                <h5 className="card-title">{quiz.name}</h5>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        </div>
                    </li>
                )}
            </ul>
        </>
    );
}