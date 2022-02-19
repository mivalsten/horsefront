import { profileFormValidator } from "./profile-form-validator";
export const sessionFormValidator = {
  ...profileFormValidator,
  sessionTitle: [
    {
      require: true,
      trigger: "blur",
      message: "Podaj nam tytuł sesji",
    },
  ],
  description: [
    {
      require: true,
      trigger: "blur",
      message: "Podaj nam opis sesji",
    },
  ],
  game: [
    {
      require: true,
      trigger: "blur",
      message: "Podaj nam system/setting",
    },
  ],
  triggers: [
    {
      require: true,
      trigger: "blur",
      message: "Podaj nam system/setting",
    },
  ],
};
