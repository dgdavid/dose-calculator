import { DateTime } from 'luxon';
import isotopes from '../../data/isotopes';

/**
 * Calculate the hours difference between two dates
 *
 * @param {Date} left - the earlier date
 * @param {Date} last - the later date
 *
 * @return {number} difference in hours from given dates.
 */
const hoursDifference = (left, right) => {
  const start = left instanceof DateTime ? left : DateTime.fromJSDate(left);
  const end = right instanceof DateTime ? right : DateTime.fromJSDate(right);
  const elapsedHours = end.diff(start, 'hours').hours;

  return Math.trunc(elapsedHours);
};

/**
 * Calculate needed volume in base input data
 *
 * @param {Object} params
 * @param {datetime} params.calibrationDate
 * @param {number} params.initialActivity
 * @param {number} params.desiredActivity
 * @param {number} params.inintialVolume
 * @param {Object} params.isotope
 *
 * @return {Object}
 * @property {datetime} calibrationDate
 * @property {number} currentActivity
 * @property {number} vialConcentration
 * @property {number} neededVolume
 */
export default function volumeCalculator({
  calibrationDate,
  initialActivity,
  desiredActivity,
  initialVolume,
  isotope,
}) {

  const calculationDate = new Date(Date.now());
  const lambda = isotopes[isotope].lambda;
  const differenceInHours = hoursDifference(calibrationDate, calculationDate);
  const currentActivity = initialActivity * Math.exp(-lambda * differenceInHours);
  const vialConcentration = currentActivity / initialVolume;
  const neededVolume = Number((desiredActivity / vialConcentration).toFixed(1));

  return {
    calculationDate,
    neededVolume,
    currentActivity: Number(currentActivity).toFixed(1),
    vialConcentration: Number(vialConcentration).toFixed(1),
  };
}
