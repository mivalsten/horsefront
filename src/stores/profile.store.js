import { defineStore } from "pinia";
import { UserProfileForm } from "../models/UserProfile";

export const useProfile = defineStore("profile", {
  state: () => ({
    profileData: UserProfileForm,
    isComplete: false,
    isAdmin: true,
    // TODO: Writing actions after logging in
    isLoggedIn: true,
    attending: {},
    organising: {},
  }),
  actions: {
    editUserProfile(formModel) {
      this.profileData = { ...formModel };
      this.isComplete = true;
    },
  },
});
