import {useState, useEffect} from "react";
import axios from "axios";
import DropdownFilter from "../Dropdown/Dropdown";
import {Link} from "@reach/router";
import {Container} from "react-bootstrap";


export default function Quiz() {
    const [searchTerm, setSearchTerm] = useState('');
    const [quizzes, setQuizzes] = useState([]);

    //const [themes, setThemes] = useState([]);

    async function getData() {
        let data_quiz = [];
        //let data_theme = [];

        try {
            data_quiz = (await axios.get('/quiz')).data;
            //data_theme = (await axios.get('/theme')).data;
        } catch (err) {
            alert(err);
        } finally {
            setQuizzes(data_quiz);
            // setThemes(data_theme);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const displayQuizzes = quizzes
        .filter((item) => {
            return searchTerm ? item.theme === searchTerm : true;
        })
        .map((item, index) => (
            <>
                <div key={index}>
                    {item.quiz_id}
                    <br/>
                    <span>{item.name}</span>
                    <br/>
                    <Link
                        className="navLink"
                        to={`/quiz/${item.quiz_id}`}
                    >
                        Accéder au quiz
                    </Link>
                    <br/>
                    <img src={item.image} alt="img-quiz"/>

                    <br/>
                </div>
            </>
        ));

    return (
        <Container style={{textAlign: 'center'}}>
            <DropdownFilter
                themes={quizzes}
                setSelected={setSearchTerm}
            />

            <div>{displayQuizzes}</div>
        </Container>
    )
}