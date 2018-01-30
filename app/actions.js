import calculateVolume from './lib/calculators/volume';

export default actions = store => ({ // eslint-disable-line
  calculateVolume: (state, data) => {
    const result = calculateVolume({ ...state, ...data });

    return {
      ...data,
      ...result,
      lessVolumeThanNeeded: state.initialVolume < result.neededVolume,
    };
  },
});
