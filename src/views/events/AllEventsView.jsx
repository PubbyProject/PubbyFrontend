import { useEffect, useState } from "react";
import EventCard from "../../components/events/EventCard";
import EventWrapper from "../../services/wrappers/EventWrapper";

export function AllEventsView(props) {
    const [events, setEvents] = useState([]);

    async function fetchData() {
        const res = await EventWrapper.getAllEvents()
        .then(response => {
            console.log(response.data.body)
            setEvents(JSON.stringify(response.data.body));
        })
        .catch(e => {
            console.log(e);
        });

        console.log(res)
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>
            {events.map(event => {
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