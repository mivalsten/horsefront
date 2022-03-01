import { defineStore } from "pinia";
import { SessionForm } from "../models/SessionForm";
import { getEvent, getEvents } from "../services/event.service";
import { getMappedSessionData } from "../utils/sessions";
import { eventLabels } from "../utils/labels";

export const useEvent = defineStore("session", {
  state: () => ({
    addSessionData: SessionForm,
    getSessionData: SessionForm,
    currentSessionId: "",
    sessionList: [],
    message: "",
    isFetched: false,
    isOneElementFetched: false,
  }),
  actions: {
    async fetchSessions() {
      try {
        const { data } = await getEvents();
        this.sessionList = { ...data };
        this.isFetched = true;
        this.isOneElementFetched = true;
      } catch (error) {
        this.message = error.message;
      }
    },
    async fetchSession(id) {
      try {
        const { data } = getEvent(id);
        this.sessionList[id] = { ...data, id };
        this.isOneElementFetched = true;
      } catch (error) {
        this.message = error.message;
      }
    },
    async addNewSession(model) {
      this.sessionList[this.sessionCount] = {
        ...model,
        id: this.sessionCount,
        freePlaces: model.maximalCount,
        isRegistrationOpen: false,
      };
    },
    setCurrentId(id) {
      this.currentSessionId = id;
    },
    async getSessionElement(id) {
      const cached = Object.values(this.sessionList).find((element) => {
        return element.id == id;
      });
      this.isOneElementFetched = true;
      return getMappedSessionData(cached);
    },
  },
  getters: {
    sortedList: (state) => {
      if (!state.isFetched) return state.fetchSessions();
      const ids = Object.keys(state.sessionList);
      return Object.values(state.sessionList).map((element, index) => {
        element.id = ids[index];
        return getMappedSessionData(element);
      });
    },
    parsedDetails: (state) => {
      if (!state.isOneElementFetched)
        state.fetchSession(state.currentSessionId);
      const data = state.getSessionElement(state.currentSessionId);

      return Object.keys(eventLabels).map((el) => {
        return {
          key: eventLabels[el],
          value: data[el],
        };
      });
    },
  },
});
