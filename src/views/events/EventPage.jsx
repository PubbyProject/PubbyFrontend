import { useEffect, useState } from "react";
import EventCard from "../../components/events/EventCard";
import EventWrapper from "../../services/wrappers/EventWrapper";

export default function AllEvents() {
    const [events, setEvents] = useState([]);

    async function fetchData() {
        await EventWrapper.getAllEvents()
        .then(response => {
            setEvents(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>
            {events.map(event => {
                <EventCard id={event.id} 
                name={event.name} 
                description={event.description}>
                </EventCard>
            })}
        </div>
    );
}