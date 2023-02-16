import apiBase from "../api/ApiBase"

const EventWrapper = {
    async getAllEvents() {
        return await apiBase.get('/events');
    }
}

export default EventWrapper;