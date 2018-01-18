import { StackNavigator } from 'react-navigation';

import VolumeCalculator from './screens/VolumeCalculator';

const DoseCalculator = StackNavigator({
  Home: { screen: VolumeCalculator },
});

export default DoseCalculator;
