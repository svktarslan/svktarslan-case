export const dateToStringDateAndHour = (
  data: number | string | Date,
  language = "tr-TR"
): string => {
  const date = new Date(data);
  const stringDate = date.toLocaleDateString(language);
  const stringTime = date.toLocaleTimeString(language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return stringDate + " " + stringTime;
};
