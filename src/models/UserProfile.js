export const UserProfileForm = {
  name: "", // required
  email: "", // required
  discord: "", // required
  organisation: "",
};

export const UserProfile = {
  ...UserProfileForm,
  isComplete: false,
  isAdmin: false,
  isLoggedIn: false,
};
