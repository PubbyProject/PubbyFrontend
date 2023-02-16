import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export default function EventCard(props) {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.id}>More info</Button>
            </Card.Body>
        </Card>
    );
}