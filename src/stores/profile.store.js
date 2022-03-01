import { defineStore } from "pinia";
import { UserProfileForm } from "../models/UserProfile";
import { getProfileData, setProfileDetails } from "../services/profile.service";

export const useProfile = defineStore("profile", {
  state: () => ({
    profileData: UserProfileForm,
    isComplete: false,
    isAdmin: true,
    // TODO: Writing actions after logging in
    isLoggedIn: false,
    attending: {},
    organising: {},
  }),
  actions: {
    editUserProfile(formModel) {
      this.profileData = { ...formModel };
      setProfileDetails(this.profileData);
      this.isComplete = true;
    },
    checkAuth() {
      const status = sessionStorage.getItem("fbssls_369001121713182");
      console.log(status);
      this.isLoggedIn = true;
    },
    async fillProfile() {
      const { data } = await getProfileData();
      this.profileData = data;
    },
  },
});
