export const UserProfileForm = {
  fullName: "", // required
  emailAddress: "", // required
  discord: "", // required
  displayName: "", // required
  organisation: "",
};

export const UserProfile = {
  ...UserProfileForm,
  isComplete: false,
  isAdmin: false,
  isLoggedIn: false,
};
