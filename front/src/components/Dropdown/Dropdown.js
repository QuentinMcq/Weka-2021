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
                    {props.quizThemes.map((item, index) => (
                        <>
                            <Dropdown.Item
                                key={index}
                                onClick={(e) => {
                                    props.setSelected(e.target.text)
                                }}
                                value={item.theme}
                            >
                                {item.theme}
                            </Dropdown.Item>
                        </>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}