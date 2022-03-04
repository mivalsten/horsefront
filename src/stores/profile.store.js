import { defineStore } from "pinia";
import { UserProfileForm } from "../models/UserProfile";
import {
  getProfileData,
  setProfileDetails,
  getAttendingData,
} from "../services/profile.service";
import { unattendEvent } from "../services/event.service";
import { getMappedSessionData } from "../utils/sessions";

export const useProfile = defineStore("profile", {
  state: () => ({
    profileData: UserProfileForm,
    isComplete: false,
    isLoggedIn: false,
    isAdmin: false,
    level: 0,
    attending: [],
    message: {
      type: "info",
      title: "",
      isShowing: false,
    },
  }),
  actions: {
    async editUserProfile(formModel) {
      try {
        this.profileData = { ...formModel, level: 0 };
        await setProfileDetails(this.profileData);
        this.isComplete = true;
        this.message = {
          type: "success",
          title: "Dane zapisane poprawnie",
          isShowing: true,
        };
      } catch (err) {
        this.message = {
          type: "error",
          title: "Coś poszło nie tak " + err.message,
          isShowing: true,
        };
      }
    },
    async fillProfile() {
      try {
        const { data } = await getProfileData();
        this.isLoggedIn = true;
        this.profileData = data;
        this.profileData.level = data.level;
        this.isAdmin = data.level > 0;
        this.isComplete = !!data.discord && !!data.name && !!data.email;
      } catch (error) {
        console.log(error);
      }
    },
    async getAttendingData() {
      try {
        const { data } = await getAttendingData();
        this.attending = data;
      } catch (err) {
        console.log(err);
      }
    },
    async unattendEvent(id) {
      try {
        await unattendEvent(id);
        await this.getAttendingData();
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getAttendingTable: (state) => {
      return state.attending.map((element) => {
        const id = new URL(element.url).pathname.replace("/events/", "");
        const parsed = getMappedSessionData(element);
        return {
          date: parsed.date,
          time: parsed.time,
          name: parsed.title,
          id,
        };
      });
    },
  },
});
