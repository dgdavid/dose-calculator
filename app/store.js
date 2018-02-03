import createStore from 'unistore';
import { DateTime } from 'luxon';

const initialState = {
  isotope: 'technetium-99m',
  calibrationDate: DateTime.local().toJSDate(),
  initialActivity: 0,
  initialVolume: 0,
  desiredActivity: 0,
  neededVolume: 0,
  currentActivity: 0,
  vialConcentration: 0,
  lessVolumeThanNeeded: false,
};

const store = createStore(initialState);

export default store;
