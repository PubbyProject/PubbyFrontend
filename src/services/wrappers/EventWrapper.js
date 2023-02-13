import apiBase from "../api/ApiBase"

export default {
    name: "EventWrapper",

    getAllEvents() {
        return apiBase.get('/events');
    }
}