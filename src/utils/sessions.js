export const getMappedSessionData = (sessionForm) => {
  if (!sessionForm) sessionForm = {};
  return {
    id: sessionForm.id || "",
    displayName: sessionForm.organizer || "",
    organization: sessionForm.organization || "",
    title: sessionForm.name || "",
    description: sessionForm.description || "",
    game: sessionForm.game || "",
    tags: sessionForm.tags || "",
    triggers: sessionForm.triggers || "",
    safetyTools: sessionForm.safety_tools || "",
    minimalCount: sessionForm.min_attendees || "",
    maximalCount: sessionForm.max_attendees || "",
    isNewbieFriendly: sessionForm.newbie_friendly || false,
    isSettingFamiliarityRequired:
      sessionForm.setting_familiarity_required || false,
    isCameraRequired: sessionForm.camera_required || false,
    userPreparation: sessionForm.userPreparation || "",
    date: sessionForm.when
      ? new Intl.DateTimeFormat("pl-PL", { dateStyle: "full" }).format(
          new Date(sessionForm.when)
        )
      : "",
    time: sessionForm.when
      ? new Intl.DateTimeFormat("pl-PL", { timeStyle: "short" }).format(
          new Date(sessionForm.when)
        )
      : "",
    freePlaces: sessionForm.capacity - sessionForm.attending_count || "",
  };
};
