import axios from "axios";
export const API = "https://api.konwent.online/";

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
    return instance.get(path + "/attendence");
  },
  unattendee(path) {
    return instance.delete(path + "/attendence");
  },
  sentAuthCode(path, data) {
    return instance.post(path, data);
  },
};
