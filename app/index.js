import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'unistore/react';

import store from './store';

import colors from './config/colors';

import VolumeCalculator from './screens/VolumeCalculator';

const Calculator = () => (
  <Provider store={store}>
    <VolumeCalculator />
  </Provider>
);

const DoseCalculator = StackNavigator({
  Home: {
    screen: Calculator,
    navigationOptions: () => ({
      title: 'Volume calculator',
      headerStyle: styles.header,
      headerTitleStyle: styles.title,
    }),
  },
});

StatusBar.setBackgroundColor(colors.materialBlueGray700);
StatusBar.setBarStyle('light-content');

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.materialBlueGray300,
    borderTopColor: colors.materialBlueGray500,
    borderTopWidth: 1,
  },

  title: {
    color: colors.white,
    fontWeight: 'normal',
    alignSelf: 'center',
  },
});

export default DoseCalculator;
