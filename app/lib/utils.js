import { DateTime } from 'luxon';

const formatDate = (date, format = DateTime.DATETIME_SHORT) => {
  const dt = date instanceof DateTime ? date : DateTime.fromJSDate(date);

  return dt.toLocaleString(format);
};

export {
  formatDate,
};
