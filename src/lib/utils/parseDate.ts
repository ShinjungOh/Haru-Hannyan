export const parseDate = (dateString: string) => {
  const createDate = new Date(dateString);
  const year = createDate.getFullYear();
  const month = createDate.getMonth();
  const date = createDate.getDate();
  return { year, month, date };
};
