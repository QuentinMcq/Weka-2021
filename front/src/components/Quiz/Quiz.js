import {useState, useEffect} from "react";
import axios from "axios";
import DropdownFilter from "../Dropdown/Dropdown";

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
            console.log(searchTerm)
            return searchTerm ? item.theme === searchTerm : true;
        })
        .map((item, index) => (
            <>
                <div key={index}>
                    {item.quiz_id}
                    <br/>
                    {item.name}
                    <br/>
                    <img src={item.image} alt="img-quiz"/>
                    <br/>
                </div>
            </>
        ));

    return (
        <>
            <DropdownFilter
                themes={quizzes}
                setSelected={setSearchTerm}
            />

            <div>{displayQuizzes}</div>
        </>
    )
}