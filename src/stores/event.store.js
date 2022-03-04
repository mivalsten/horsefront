import { defineStore } from "pinia";
import { SessionForm } from "../models/SessionForm";
import { getEvent, getEvents, attendEvent } from "../services/event.service";
import { getMappedSessionData } from "../utils/sessions";
import { eventLabels } from "../utils/labels";

export const useEvent = defineStore("session", {
  state: () => ({
    addSessionData: SessionForm,
    getSessionData: SessionForm,
    currentSessionId: "",
    sessionList: [],
    message: {
      type: "info",
      title: "",
      isShowed: false,
    },
  }),
  actions: {
    async fetchSessions() {
      try {
        const { data } = await getEvents();
        this.sessionList = { ...data };
      } catch (error) {
        this.message = {
          type: "error",
          title: error.message,
          isShowed: true,
        };
      }
    },
    async fetchSession(id) {
      try {
        const { data } = await getEvent(id);
        this.sessionList[id] = { ...data, id };
      } catch (error) {
        this.message = {
          type: "error",
          title: error.message,
          isShowed: false,
        };
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
    async attendEvent(id) {
      try {
        const response = await attendEvent(id);
        switch (response.status) {
          case 200:
            this.message.title = "Jesteś na liście rezerwowej";
            break;
          case 201:
            this.message.title = "Zapisałeś się na sesję. Miłej gry";
        }
        this.message.type = "success";
        this.message.isShowed = true;
        this.fetchSession(id);
      } catch (error) {
        switch (error.response.status) {
          case 401:
            this.message.title = "Musisz być zalogowany, żeby sie zapisać";
            break;
          case 420:
            this.message.title =
              "Nie możesz zapisać się na sesję, którą organizujesz";
            break;
          case 404:
            this.message.title =
              "Nie znaleziono sesji, na którą chcesz się zapisać";
            break;
          case 500:
            this.message.title =
              "Nie możemy cię zapisać na tę sesję. Błąd systemu";
            break;
          default:
            this.message.title = "Wystąpił nieznany błąd:" + error;
        }
        this.message.type = "error";
        this.message.isShowed = true;
      }
    },
    clearMessage() {
      this.message = {
        type: "info",
        title: "",
        isShowed: false,
      };
    },
    getSessionElement(id) {
      const cached = this.sessionList[id];
      if (!cached) this.fetchSession(id);
      this.isOneElementFetched = true;
      return getMappedSessionData(cached || this.sessionList[id]);
    },
    parseDetails(id) {
      const el = this.getSessionElement(id);
      const keys = Object.keys(eventLabels);
      const maped = keys.map((key) => {
        return {
          header: eventLabels[key],
          value: el[key],
        };
      });
      return maped;
    },
  },
  getters: {
    sortedList: (state) => {
      const ids = Object.keys(state.sessionList);
      return Object.values(state.sessionList)
        .sort((a, b) => new Date(a.start) - new Date(b.start))
        .map((element, index) => {
          element.id = ids[index];
          return getMappedSessionData(element);
        });
    },
  },
});
