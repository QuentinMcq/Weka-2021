
import {Container} from "react-bootstrap";

export default function Point(props) {
    return (
        <Container style={{textAlign: 'center'}}>
            Votre score est de : {props.pt}
        </Container>
    );
}


