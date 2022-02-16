import { defineStore } from "pinia";
import { UserProfile } from "../models/UserProfile";

export const useProfile = defineStore("profile", {
  state: () => ({ profile: UserProfile }),
  actions: {
    editUserProfile(formModel) {
      this.profile = { ...formModel, isComplete: true };
    },
  },
});
