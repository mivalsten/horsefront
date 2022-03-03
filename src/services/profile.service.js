import axios from "axios";
import getEnv from "@/utils/env";
export const API = getEnv("VUE_APP_API_PATH");
// import MockAdapter from "axios-mock-adapter";
// const mock = new MockAdapter(axios);
const instance = axios.create({
  baseURL: API,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

// mock.onGet("/i_am/").reply(200, {
//   email: "kordsfadsgf@example.com",
//   name: "Kornelia Kojnjkla",
//   discord: "korneldsfala#8322",
//   roll20: null,
//   organisation: null,
//   organizing: [],
//   attending: [],
// });

export const getProfileData = () => {
  return instance.get("/i_am/");
};

export const setProfileDetails = async (data) => {
  return instance.patch("/i_am/changing", data);
};
