import { defineStore } from "pinia";
import { SessionDetails } from "../models/SessionDetails";

export const useEvent = defineStore("session", {
  state: () => ({
    addSessionData: SessionDetails,
    sessionList: [],
  }),
  actions: {
    addNewSession(id, model) {
      model.attending_count = model.maximalCount;
      this.sessionList[id] = model;
    },
  },
});
