import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';

const DoseCalculator = StackNavigator({
  Home: { screen: HomeScreen },
});

export default DoseCalculator;
