import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

export default class EventCard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: this.props.id,
            name: this.props.name,
            description: this.props.description
        }
    };

    render() {
        return (
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{this.name}</Card.Title>
                    <Card.Text>
                        {this.description}
                    </Card.Text>
                    <Button variant="primary" href={this.id}>More info</Button>
                </Card.Body>
            </Card>
        );
    }
};