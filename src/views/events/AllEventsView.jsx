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
        const res = await EventWrapper.getAllEvents()
        .then(response => {
            console.log(response.data.body)
            this.setState({events: response.data.body});
        })
        .catch(e => {
            console.log(e);
        });

        console.log(res)
    };

    async componentDidMount() {
        this.fetchData();
    };

    render() {
        return (
            <div>
                {this.state.events.map(event => {
                    return (
                    <EventCard id={event.id} 
                        name={event.name} 
                        description={event.description}>
                    </EventCard>
                    );
                })}
            </div>
        );
    }
}