import calculateVolume from './lib/calculators/volume';

export default actions = store => ({ // eslint-disable-line
  // FIXME: action should be as pure as possible
  // TODO: add tests
  calculateVolume: (state, data) => {
    const result = calculateVolume({ ...state, ...data });

    return {
      ...data,
      ...result,
      lessVolumeThanNeeded: state.initialVolume < result.neededVolume,
    };
  },
});
