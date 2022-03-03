import { defineStore } from "pinia";
import { UserProfile } from "../models/UserProfile";
import { getProfileData, setProfileDetails } from "../services/profile.service";
import { unattendEvent } from "../services/event.service";

export const useProfile = defineStore("profile", {
  state: () => ({
    profile: UserProfile,
    isComplete: false,
    isLoggedIn: false,
    isAdmin: false,
    level: 0,
    attending: [],
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
    async checkAuth() {
      try {
        await getProfileData();
        this.isLoggedIn = true;
      } catch (error) {
        console.log(error);
      }
    },
    async fillProfile() {
      const { data } = await getProfileData();
      this.profileData = data;
      this.profileData.level = data.level;
      this.isAdmin = data.level > 0;
      this.attending = data.attending;
    },
    unattendEvent(id) {
      try {
        unattendEvent(id);
        this.fillProfile();
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getAttendingData: (state) => {
      return state.attending.map((element) => {
        return {
          date: element.date,
          time: element.time,
          name: element.name,
        };
      });
    },
  },
});
