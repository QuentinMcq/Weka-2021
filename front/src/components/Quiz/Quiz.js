import {useState, useEffect} from "react";
import axios from "axios";
import DropdownFilter from "../Dropdown/Dropdown";

export default function Quiz() {
    const [searchTerm, setSearchTerm] = useState('');
    const [quiz, setQuiz] = useState([]);

    async function getQuiz() {
        let data = [];

        try {
            data = (await axios.get('http://localhost:8000/quiz')).data;
        } catch (err) {
            alert(err);
        } finally {
            setQuiz(data);
        }
    }

    useEffect(() => {
        getQuiz();
    }, []);

    const itemsToShow = quiz
        .filter((item) => {
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
                items={quiz}
                setSelected={setSearchTerm}
            />

            <div>{itemsToShow}</div>
        </>
    )
}