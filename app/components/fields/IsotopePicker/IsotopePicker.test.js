import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import IsotopePicker from './IsotopePicker';
import isotopes from '../../../data/isotopes';

jest.mock('../../../data/isotopes');

test('renders correctly', () => {

  const tree = renderer.create(<IsotopePicker isotope={isotopes.i2} />).toJSON();

  expect(tree).toMatchSnapshot();
});
