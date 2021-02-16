import axios from "axios";
export const API = "http://hyperhorse.westeurope.azurecontainer.io/";

const instance = axios.create({
    baseURL: API,
});
instance.interceptors.response.use(
    () => {},
    (err) => {
        return Promise.reject(err);
    }
);
export default {
    getEvents() {
        return instance.get("/events");
    },
    getUserProfile() {
        return instance.get("/i_am");
    },
    updateUserProfile(data) {
        return instance.post("/i_am/changing", data);
    },
    getAttendedEvents() {
        return instance.get("/i_am/attending");
    },
    getOrganizedEvents() {
        return instance.get("/i_am/organizing");
    },
    deleteUserAccount() {
        return instance.delete("/i_am/removing/myself");
    },
    attendee(id) {
        return instance.get(`/i_am/${id}/attendance`);
    },
};
