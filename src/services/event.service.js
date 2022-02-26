import axios from "axios";
import getEnv from "@/utils/env";
export const API = getEnv("VUE_APP_API_PATH");

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
