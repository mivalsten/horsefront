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
        this.message = {
          type: "error",
          title: error.message,
          isShowed: true,
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
        const data = await attendEvent(id);

        switch (data.response.status) {
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
        console.log("ERROR", error);
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
    setCurrentId(id) {
      this.currentSessionId = id;
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
      if (!state.isFetched) return state.fetchSessions();
      const ids = Object.keys(state.sessionList);
      return Object.values(state.sessionList).map((element, index) => {
        element.id = ids[index];
        return getMappedSessionData(element);
      });
    },
  },
});
