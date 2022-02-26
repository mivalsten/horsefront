export const getMappedSessionData = (sessionForm) => {
  if (!sessionForm) sessionForm = {};
  return {
    id: sessionForm.id || "",
    displayName: sessionForm.displayName || "",
    organization: sessionForm.organization || "",
    title: sessionForm.title || "",
    description: sessionForm.description || "",
    game: sessionForm.game || "",
    tags: sessionForm.tags || "",
    triggers: sessionForm.triggers || "",
    safetyTools: sessionForm.safetyTools || "",
    minimalCount: sessionForm.minimalCount || "",
    maximalCount: sessionForm.maximalCount || "",
    isNewbieFriendly: sessionForm.isNewbieFriendly || false,
    isSettingFamiliarityRequired:
      sessionForm.isSettingFamiliarityRequired || false,
    isCameraRequired: sessionForm.isCameraRequired || false,
    userPreparation: sessionForm.userPreparation || "",
    date: sessionForm.date || "",
    time: sessionForm.time || "",
    freePlaces: sessionForm.maximalCount || "",
  };
};
