import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { VolumeCalculator } from './VolumeCalculator';
import isotopes from '../data/isotopes';

jest.mock('../data/isotopes');

jest.mock('../components/fields/DateTimeInput');

test('renders correctly', () => {
  const tree = renderer.create(<VolumeCalculator isotope={isotopes.i2} />).toJSON();

  expect(tree).toMatchSnapshot();
});
