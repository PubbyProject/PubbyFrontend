import React from "react";
import EventCard from "../../components/events/EventCard";
import EventWrapper from "../../services/wrappers/EventWrapper";

export default class AllEventsView extends React.Component {
    constructor() {
        super();
        this.state = {
            events: []
        }
    };

    fetchData = async () => {
        await EventWrapper.getAllEvents()
        .then(response => {
            console.log(response.data.body)
            this.setState({events: response.data.body});
            this.state.events.forEach(element => {
                console.log(`Id: ${element.id}`)
            });
        })
        .catch(e => {
            console.log(e);
        });
    };

    async componentDidMount() {
        this.fetchData();
    };

    render() {
        return (
            <div>
                {this.state.events.map(event => {
                    return (
                        <div key={event.id}>
                        <EventCard
                            eventId={event.id} 
                            name={event.name} 
                            description={event.description}>
                    </EventCard>
                    </div>
                    );
                })}
            </div>
        );
    }
}