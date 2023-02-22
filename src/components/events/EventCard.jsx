import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export default class EventCard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            eventId: props.eventId,
            name: props.name,
            description: props.description
        }
    };

    render() {
        return (
            <Card style={{width: '18rem'}} key={this.eventId}>
                <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Text>
                        {this.state.description}
                    </Card.Text>
                    <Button variant="primary" href={this.state.eventId}>More info</Button>
                </Card.Body>
            </Card>
        );
    }
};