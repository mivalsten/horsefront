export const getMappedSessionData = (sessionForm) => {
  if (!sessionForm) sessionForm = {};
  return {
    id: sessionForm.id || "",
    displayName: sessionForm.organizer || "",
    organization: sessionForm.organization || "",
    ageRestrictions: sessionForm.age_restrictions || "",
    title: sessionForm.name || "",
    description: sessionForm.description || "",
    game: sessionForm.game || "",
    tags: sessionForm.tags || "",
    triggers: sessionForm.triggers || "",
    safetyTools: sessionForm.safety_tools || "",
    minimalCount: sessionForm.min_attendees || "",
    maximalCount: sessionForm.capacity || "",
    isNewbieFriendly: sessionForm.newbie_friendly || false,
    isSettingFamiliarityRequired:
      sessionForm.setting_familiarity_required || false,
    isCameraRequired: sessionForm.camera_required || false,
    userPreparation: sessionForm.userPreparation || "",
    date: sessionForm.start
      ? new Intl.DateTimeFormat("pl-PL", { dateStyle: "full" }).format(
          new Date(sessionForm.start)
        )
      : "",
    time: sessionForm.start
      ? new Intl.DateTimeFormat("pl-PL", { timeStyle: "short" }).format(
          new Date(sessionForm.start)
        )
      : "",
    freePlaces: sessionForm.capacity - sessionForm.attending_count || 0,
  };
};
