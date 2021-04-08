import {useState, useEffect} from "react";
import axios from "axios";
import {Container, Row, Col} from "react-bootstrap";
import Point from "../Point/Point";


export default function Question(props) {
    const [questions, setQuestions] = useState([]);

    let point ;


    const tab =[];
    const nbquestion=[];
    const answerPoint=[];

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

    function calculerPoint(){
        point=0;

        for (let i = 1; i <= 4; i++) {
            //console.log("nb question "+nbquestion[i-1]);
            for (let j = 1; j <= nbquestion[i-1]; j++) {
               let param= document.getElementById("answer_"+j+"_"+i)


                if(param.checked && param.value===tab[i-1]) {
                    point += answerPoint[i - 1];
                }

            }

        }
        console.log(point);
        return point


    }
    function affichagePoint(){
        return point
    }



    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <Container style={{textAlign: 'center'}}>
            <>
                {questions.map((question, index) =>
                    <Container key={index} style={{marginTop: '5%'}}>
                        <h3 style={{textDecoration: 'underline'}}>Question {index + 1}
                            <div style={{display:"none" }}>{tab[index]=question.correct_answer}</div>
                            <div style={{display:"none" }}> {answerPoint[index]=question.nb_points}</div>
                            <span className="font-weight-bold"> ({question.nb_points} points)</span>
                        </h3>
                        <br/>
                        <h4>{question.sentence}</h4>
                        <br/>

                        <Container>
                            <Row className='justify-content-center'>
                                <Col md="auto">
                                    {question.answer_1 !== null ? (
                                        <>
                                            {nbquestion[index]=1}.
                                            <input type="radio" id={`answer_1_${index + 1}`} name={`q${index + 1}`} value={question.answer_1}/>
                                            &nbsp;

                                            {question.answer_1.includes('https') ?
                                                <img src={question.answer_1} alt='answer_1'/> :
                                                <span>{question.answer_1}</span>
                                            }

                                        </>
                                    ) : ''}
                                </Col>

                                <br/>

                                <Col md="auto">
                                    {question.answer_2 !== null ? (
                                        <>
                                            {nbquestion[index]=2}.
                                            <input type="radio" id={`answer_2_${index + 1}`} name={`q${index + 1}`} value={question.answer_2}/>
                                            &nbsp;

                                            {question.answer_2.includes('https') ?
                                                <img src={question.answer_2} alt='answer_2'/> :
                                                <span>{question.answer_2}</span>
                                                // <button className=" p-2 rounded shadow mb-4"> {question.answer_2}</button>
                                            }
                                        </>
                                    ) : ''}
                                </Col>
                            </Row>
                        </Container>

                        <br/>

                        <Container>
                            <Row className='justify-content-center'>
                                <Col md="auto">

                                    {question.answer_3 !== null ? (
                                        <>
                                            {nbquestion[index]=3}.
                                            <input type="radio" id={`answer_3_${index + 1}`} name={`q${index + 1}`} value={question.answer_3}/>
                                            &nbsp;

                                            {question.answer_3.includes('https') ?
                                                <img src={question.answer_3} alt='answer_3'/> :
                                                <span>{question.answer_3}</span>
                                            }
                                        </>
                                    ) : ''}

                                </Col>

                                <br/>

                                <Col md="auto">
                                    {question.answer_4 !== null ? (
                                        <>
                                            {nbquestion[index]=4}.
                                            <input type="radio" id={`answer_4_${index + 1}`} name={`q${index + 1}`} value={question.answer_4}/>
                                            &nbsp;

                                            {question.answer_4.includes('https') ?
                                                <img src={question.answer_4} alt='answer_4'/> :
                                                <span>{question.answer_4}</span>
                                            }
                                        </>
                                    ) : ''}
                                </Col>
                            </Row>
                        </Container>

                    </Container>
                )}
                <input type="button" id="calculPoint" value="Verifer les réponses" onClick={calculerPoint} />

                {()=>{calculerPoint()}}
            </>

            <Point
                pt={point}
            />
        </Container>


    );
}


