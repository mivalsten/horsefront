import axios from "axios";
export const API = "https://sesje.konwent.online/";

const instance = axios.create({
    baseURL: API,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

export default {
    getEvents() {
        return instance.get("/events");
    },
    getEvent(path) {
        return instance.get("/events/" + path);
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
    attendee(path) {
        return instance.post("/events/" + path + "/attendance");
    },
    unattendee(path) {
        return instance.delete(path + "/attendence");
    },
    login() {
        return instance.get("/login/google");
    },
    sentAuthCode(path, data) {
        return fetch(API + path, {
            method: "POST",
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }).then((res) => {
            return res.json();
        });
    },
};
