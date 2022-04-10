import axios from "axios";
//import getEnv from "@/utils/env";
export const API = process.env.VUE_APP_API_PATH;

const instance = axios.create({
  baseURL: API,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const getEvents = async () => {
  return instance.get("/events");
};

export const getEvent = async (id) => {
  return instance.get(`/events/${id}`);
};

export const addEvent = async (data) => {
  return instance.post("/events", data);
};

export const attendEvent = async (id) => {
  return instance.post(`/events/${id}/attendance`);
};

export const unattendEvent = async (id) => {
  return instance.delete(`/events/${id}/attendance`);
};

export const getEventParticipants = async (id) => {
  return instance.get(`/events/${id}/attendance`);
};
