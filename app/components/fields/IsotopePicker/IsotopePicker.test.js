import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import IsotopePicker from './IsotopePicker';

test('renders correctly', () => {
  const tree = renderer.create(<IsotopePicker />).toJSON();

  expect(tree).toMatchSnapshot();
});
