export const dateHelper = (date: number): string => {
  return new Date(date).toLocaleString("de-DE", {
    timeZone: "UTC",
  });
};
