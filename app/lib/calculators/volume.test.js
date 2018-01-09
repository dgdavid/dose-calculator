import startOfToday from 'date-fns/start_of_today';
import subHours from 'date-fns/sub_hours';
import addHours from 'date-fns/add_hours';

import isotopes from '../../data/isotopes';
import volumeCalculator from './volume';

describe('volumeCalculator', () => {
  const Tc99m = isotopes['technetium-99m'];
  const params = {
    isotope: Tc99m,
    calibrationDate: startOfToday(),
    initialVolume: 10,
    initialActivity: 1450,
    desiredActivity: 300,
  };

  test('returns an object', () => {
    const result = volumeCalculator(params);

    expect(typeof result).toBe('object');
  });

  describe('which has', () => {
    const expectedProps = ['calculationDate', 'currentActivity', 'vialConcentration', 'neededVolume'];
    const result = volumeCalculator(params);

    expectedProps.forEach((prop) => {
      test(`'${prop}' property`, () => {
        expect(result).toHaveProperty(prop);
      });
    });
  });

  describe(`for 10ml of ${Tc99m.name} with 1450 mCi initial activty`, () => {
    Date.now = jest.fn(() => new Date(2018, 1, 8, 7, 30));

    const now = Date.now();

    describe('calibrated right now', () => {
      test('returns 2.1 ml of needed volume for 300 mCi desired activity', () => {
        const result = volumeCalculator({
          isotope: Tc99m,
          calibrationDate: now,
          initialActivity: 1450,
          initialVolume: 10,
          desiredActivity: 300,
        });

        expect(result.neededVolume).toBe(2.1);
      });
    });

    describe('calibrated 3 hours ago', () => {
      test('returns 2.9 ml volume needed for 300 mCi desired activity', () => {
        const result = volumeCalculator({
          isotope: Tc99m,
          calibrationDate: subHours(now, 3),
          initialActivity: 1450,
          initialVolume: 10,
          desiredActivity: 300,
        });

        expect(result.neededVolume).toBe(2.9);
      });
    });

    describe('calibrated one half life (6.01h) ago', () => {
      test('returns 10 ml volume needed for 725 mCi desired activity', () => {
        const result = volumeCalculator({
          isotope: Tc99m,
          calibrationDate: subHours(now, Tc99m.halfLife),
          initialActivity: 1450,
          initialVolume: 10,
          desiredActivity: 725,
        });

        expect(result.neededVolume).toBe(10);
      });
    });

    describe('calibrated one half life (6.01h) in the future', () => {
      test('returns 1 ml volume needed for 300 mCi desired activity', () => {
        const result = volumeCalculator({
          isotope: Tc99m,
          calibrationDate: addHours(now, Tc99m.halfLife),
          initialActivity: 1450,
          initialVolume: 10,
          desiredActivity: 300,
        });

        expect(result.neededVolume).toBe(1);
      });
    });
  });
});
