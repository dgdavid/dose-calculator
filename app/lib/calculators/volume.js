import { differenceInHours } from 'date-fns';

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
  const calculationDate = Date.now();
  const lambda = isotope.lambda;
  const hoursDifference = differenceInHours(calculationDate, calibrationDate);
  const currentActivity = initialActivity * Math.exp(-lambda * hoursDifference);
  const vialConcentration = currentActivity / initialVolume;
  const neededVolume = Number((desiredActivity / vialConcentration).toFixed(1));

  return {
    calculationDate,
    currentActivity,
    vialConcentration,
    neededVolume,
  };
}
