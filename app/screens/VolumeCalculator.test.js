import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { VolumeCalculator } from './VolumeCalculator';

jest.mock('../components/fields/DateTimeInput');

test('renders correctly', () => {
  const tree = renderer.create(<VolumeCalculator />).toJSON();

  expect(tree).toMatchSnapshot();
});
