import { defineStore } from "pinia";
import { SessionForm } from "../models/SessionForm";
import { getMappedSessionData } from "../utils/sessions";

export const useEvent = defineStore("session", {
  state: () => ({
    addSessionData: SessionForm,
    sessionList: [],
    sessionCount: 0,
  }),
  actions: {
    addNewSession(model) {
      model.id = this.sessionCount;
      this.sessionList[this.sessionCount] = getMappedSessionData(model);
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
  },
});
