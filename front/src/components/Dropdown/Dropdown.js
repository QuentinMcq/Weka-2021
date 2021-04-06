import {Dropdown} from 'react-bootstrap';

export default function DropdownFilter(props) {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant='info'>
                    <span>Sélectionner un thème</span>
                </Dropdown.Toggle>

                <Dropdown.Menu title="Dropdown button">
                    <Dropdown.Item
                        value=''
                        onClick={() => props.setSelected('')}
                    >
                        Tous les thèmes disponibles
                    </Dropdown.Item>

                    <Dropdown.Divider/>

                    {props.items.map((quiz, index) => (
                        <>
                            <Dropdown.Item
                                key={index}
                                onClick={(e) => {
                                    props.setSelected(e.target.text)
                                }}
                                value={quiz.theme}
                            >
                                {quiz.theme}
                            </Dropdown.Item>
                        </>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}