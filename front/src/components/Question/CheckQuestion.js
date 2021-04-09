import {Col, Container, Row} from "react-bootstrap";

export default function CheckQuestion(props) {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col md="auto">
                        <>
                            {props.nbQuestion[props.index] = 1}.
                            <input type="radio" id={`answer_1_${props.index + 1}`} name={`q${props.index + 1}`} value={props.question.answer_1}/>
                            &nbsp;

                            {props.question.answer_1.includes('https') ?
                                <img src={props.question.answer_1} style={{borderRadius: '5px'}} alt='answer_1'/> :
                                <span>{props.question.answer_1}</span>
                            }
                        </>
                    </Col>

                    <br/>

                    <Col md="auto">
                        <>
                            {props.nbQuestion[props.index] = 2}.
                            <input type="radio" id={`answer_2_${props.index + 1}`} name={`q${props.index + 1}`} value={props.question.answer_2}/>
                            &nbsp;

                            {props.question.answer_2.includes('https') ?
                                <img src={props.question.answer_2} style={{borderRadius: '5px'}} alt='answer_2'/> :
                                <span>{props.question.answer_2}</span>
                            }
                        </>
                    </Col>
                </Row>
            </Container>

            <br/>

            <Container>
                <Row className='justify-content-center'>
                    <Col md="auto">
                        {props.question.answer_3 !== null ? (
                            <>
                                {props.nbQuestion[props.index] = 3}.
                                <input type="radio" id={`answer_3_${props.index + 1}`} name={`q${props.index + 1}`} value={props.question.answer_3}/>
                                &nbsp;
                                {props.question.answer_3.includes('https') ?
                                    <img src={props.question.answer_3} style={{borderRadius: '5px'}} alt='answer_3'/> :
                                    <span>{props.question.answer_3}</span>
                                }
                            </>
                        ) : ''}

                    </Col>

                    <br/>

                    <Col md="auto">
                        {props.question.answer_4 !== null ? (
                            <>
                                {props.nbQuestion[props.index] = 4}.
                                <input type="radio" id={`answer_4_${props.index + 1}`} name={`q${props.index + 1}`} value={props.question.answer_4}/>
                                &nbsp;

                                {props.question.answer_4.includes('https') ?
                                    <img src={props.question.answer_4} style={{borderRadius: '5px'}} alt='answer_4'/> :
                                    <span>{props.question.answer_4}</span>
                                }
                            </>
                        ) : ''}
                    </Col>
                </Row>
            </Container>
        </>
    )
}