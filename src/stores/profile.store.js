import { defineStore } from "pinia";
import { UserProfileForm } from "../models/UserProfile";
import { getProfileData, setProfileDetails } from "../services/profile.service";

export const useProfile = defineStore("profile", {
  state: () => ({
    profileData: UserProfileForm,
    isComplete: false,
    isAdmin: false,
    // TODO: Writing actions after logging in
    isLoggedIn: false,
    attending: {},
    organising: {},
    messgaeStatus: "",
    message: {
      error: {
        type: "error",
        content:
          "Ups, coś poszło nie tak, przeładuj aplikację i spróbuj jeszcze raz",
      },
      success: {
        type: "success",
        content: "Pomyślnie udało ci się zalogować",
      },
    },
  }),
  actions: {
    editUserProfile(formModel) {
      try {
        this.profileData = { ...formModel, level: 0 };
        setProfileDetails(this.profileData);
        this.isComplete = true;
        this.messgaeStatus = "success";
      } catch (err) {
        this.messgaeStatus = "error";
      }
    },
    checkAuth() {
      console.log(sessionStorage);
      this.isLoggedIn = true;
    },
    async fillProfile() {
      const { data } = await getProfileData();
      this.profileData = data;
    },
  },
});
