import axios from 'axios';

export const isDayOff = async date => {
  const yyyy = date.getFullYear();
  const mm =
    date.getMonth() + 1 > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
  const dd = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
  const isDayOff = await axios.get(`https://isdayoff.ru/${yyyy}${mm}${dd}`);

  return isDayOff.data;
};

export const getNextWorkingDay = async () => {
  const today = Date.now();
  const date = new Date(today);
  date.setDate(date.getDate() + 1);

  for (let i = 0; i < 30; i++) {
    const ido = await isDayOff(date);
    if (!ido) {
      const ndate = date.toISOString().split('T')[0];
      return ndate;
    }
    date.setDate(date.getDate() + 1);
  }
};

export const formatDate = dateStr => {
  if (!dateStr) return;
  const dateArr = dateStr.split('-');
  return `${dateArr[2]}.${dateArr[1]}.${dateArr[0]}`;
};

export const getTomorrow = () => {
  const today = Date.now();
  const date = new Date(today);
  date.setDate(date.getDate() + 1);
  const ndate = date.toISOString().split('T')[0];
  return ndate;
};
