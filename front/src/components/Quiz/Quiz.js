import './Quiz.css';
import {useState, useEffect} from "react";
import axios from "axios";
import DropdownFilter from "../Dropdown/Dropdown";
import {Link} from "@reach/router";
import {Container, Button, Form} from "react-bootstrap";

export default function Quiz() {
    const [searchTerm, setSearchTerm] = useState('');
    const [quizzes, setQuizzes] = useState([]);

    // const [themes, setThemes] = useState([]);

    async function getQuiz() {
        let data_quiz = [];
        // let data_theme = [];

        try {
            data_quiz = (await axios.get('/quiz')).data;
            // data_theme = (await axios.get('/theme')).data;
        } catch (err) {
            alert(err);
        } finally {
            setQuizzes(data_quiz);
            // setThemes(data_theme);
        }
    }

    async function deleteQuiz(quiz, id) {
        try {
            await axios.delete('/quiz/' + id);
        } catch (err) {
            alert(err);
        } finally {
           // setQuizzes(data_quiz);
        }
    }

    useEffect(() => {
        getQuiz();
    }, []);

    const displayQuizzes = quizzes
        .filter((item) => {
            return searchTerm ? item.theme === searchTerm : true;
        })
        .map((item, index) => (
            <>
                <div key={index}>
                    <h2 className="font-weight-bold mt-5">Quiz n°{item.quiz_id}</h2>

                    <Link className="quiz-img" to={`/quiz/${item.quiz_id}`}>
                        <img
                            src={item.image}
                            alt="img-quiz"
                            style={{borderRadius: '5px'}}
                        />
                        <h5 className="quiz-text">Accéder au quiz !</h5>
                    </Link>


                    <Button
                        className="mr-3"
                        variant="success"
                        onClick={() => deleteQuiz(item, item.quiz_id)}
                    >
                        Supprimer un quiz
                    </Button>
                </div>
            </>
        ));

    return (
        <Container className="text-center">
            <DropdownFilter
                themes={quizzes}
                setSelected={setSearchTerm}
            />

            <div>{displayQuizzes}</div>
        </Container>
    )
}