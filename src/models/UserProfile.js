export const UserProfileForm = {
  fullName: "", // required
  emailAddress: "", // required
  discord: "", // required
  nickName: "", // required
  organisation: "",
};

export const UserProfile = {
  ...UserProfileForm,
  isComplete: false,
};
