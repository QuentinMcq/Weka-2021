import {Col, Container, Row} from "react-bootstrap";

export default function CheckQuestion(props) {
    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col md="auto">
                        <>
                            <input type="checkbox" id="answer_1" name="answer_1"/>
                            &nbsp;

                            {props.questions.answer_1.includes('https') ?
                                <img src={props.questions.answer_1} alt='answer_1'/> :
                                <span>{props.questions.answer_1}</span>
                            }
                        </>
                    </Col>

                    <br/>

                    <Col md="auto">
                        <>
                            <input type="checkbox" id="answer_2" name="answer_2"/>
                            &nbsp;

                            {props.questions.answer_2.includes('https') ?
                                <img src={props.questions.answer_2} alt='answer_2'/> :
                                <span>{props.questions.answer_2}</span>
                            }
                        </>
                    </Col>
                </Row>
            </Container>

            <br/>

            <Container>
                <Row className='justify-content-center'>
                    <Col md="auto">
                        {props.questions.answer_3 !== null ? (
                            <>
                                <input type="checkbox" id="answer_3" name="answer_3"/>
                                &nbsp;
                                {props.questions.answer_3.includes('https') ?
                                    <img src={props.questions.answer_3} alt='answer_3'/> :
                                    <span>{props.questions.answer_3}</span>
                                }
                            </>
                        ) : ''}

                    </Col>

                    <br/>

                    <Col md="auto">
                        {props.questions.answer_4 !== null ? (
                            <>
                                <input type="checkbox" id="answer_4" name="answer_4"/>
                                &nbsp;

                                {props.questions.answer_4.includes('https') ?
                                    <img src={props.questions.answer_4} alt='answer_4'/> :
                                    <span>{props.questions.answer_4}</span>
                                }
                            </>
                        ) : ''}
                    </Col>
                </Row>
            </Container>

        </>
    )
}