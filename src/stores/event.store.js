import { defineStore } from "pinia";
import { SessionForm } from "../models/SessionForm";
import { getEvents } from "../services/event.service";
import { getMappedSessionData } from "../utils/sessions";

export const useEvent = defineStore("session", {
  state: () => ({
    addSessionData: SessionForm,
    sessionList: [],
    sessionCount: 0,
    message: "",
  }),
  actions: {
    async fetchSessions() {
      try {
        const { data } = await getEvents();
        this.sessionList = data;
      } catch (error) {
        this.message = error.message;
      }
    },
    addNewSession(model) {
      this.sessionList[this.sessionCount] = {
        ...model,
        id: this.sessionCount,
        freePlaces: model.maximalCount,
        isRegistrationOpen: false,
      };
      this.sortSessionList();
      this.incrementSessionCount();
    },
    incrementSessionCount() {
      this.sessionCount++;
    },
    sortSessionList() {
      this.sessionList.sort((a, b) => {
        return (
          new Date(`${a.date}T${a.time}:00`) -
          new Date(`${b.date}T${b.time}:00`)
        );
      });
    },
    getSessionElement(id) {
      return getMappedSessionData(
        this.sessionList.find((element) => {
          return element.id == parseInt(id, 10);
        })
      );
    },
  },
  getters: {
    basicData: (state) => {
      return state.sessionList.map(getMappedSessionData);
    },
  },
});
