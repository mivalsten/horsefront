export const getMappedSessionData = (sessionForm) => {
  return {
    id: sessionForm.id,
    displayName: sessionForm.displayName,
    organization: sessionForm.organization,
    title: sessionForm.title,
    description: sessionForm.description,
    game: sessionForm.game,
    tags: sessionForm.tags.split(", "),
    triggers: sessionForm.triggers.split(", "),
    safetyTools: sessionForm.safetyTools.split(", "),
    minimalCount: sessionForm.minimalCount,
    maximalCount: sessionForm.maximalCount,
    isNewbieFriendly: sessionForm.isNewbieFriendly,
    isSettingFamiliarityRequired: sessionForm.isSettingFamiliarityRequired,
    isCameraRequired: sessionForm.isCameraRequired,
    userPreparation: sessionForm.userPreparation,
    date: sessionForm.date,
    time: sessionForm.time,
    freePlaces: sessionForm.maximalCount,
  };
};
