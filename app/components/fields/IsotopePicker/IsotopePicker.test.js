import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import IsotopePicker from './IsotopePicker';

jest.mock('../../../data/isotopes');

test('renders correctly', () => {
  const tree = renderer.create(<IsotopePicker isotope="i2" />).toJSON();

  expect(tree).toMatchSnapshot();
});
