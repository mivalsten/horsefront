import { discord, email, fullName } from "../consts/form-patterns";
import { patternValidator } from "../utils/validator";

export const profileFormValidator = {
  discord: [
    {
      required: true,
      message: "Podaj nam swój nick do discorda",
      trigger: "blur",
    },
    {
      trigger: "blur",
      message: "To nie jest prawidłowy nick do discorda.",
      validator: (rule, value, callback) => {
        patternValidator(value, callback, discord);
      },
    },
  ],
  fullName: [
    {
      required: true,
      message: "Podaj nam swoje imię i nazwisko",
      trigger: "blur",
    },
    {
      trigger: "blur",
      message: "Podaj pełne imię i nazwisko",
      validator: (rule, value, callback) => {
        patternValidator(value, callback, fullName);
      },
    },
  ],
  displayName: [
    {
      required: true,
      message: "Podaj nam swój pseudonim. Będzie on wyświetlany w aplikacji",
      trigger: "blur",
    },
  ],
  emailAddress: [
    {
      required: true,
      message: "Podaj nam swój adres e-mail",
      trigger: "blur",
    },
    {
      trigger: "blur",
      message: "Podaj poprawny adres email",
      validator: (rule, value, callback) => {
        patternValidator(value, callback, email);
      },
    },
  ],
  organisation: {},
};
