export const isWorkingDay = async date => {
  const yyyy = date.getFullYear();
  const mm = date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth();
  const dd = date.getDate();
  const isDayOff = await fetch(`https://isdayoff.ru/${yyyy}${mm}${dd}`);
  console.log(isDayOff);
};

export const getNextWorkingDay = () => {
  const today = Date.now();
  console.log(today);
  const date = new Date(today);
  isWorkingDay(date);
};
