import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import NumericInput from './NumericInput';

test('render correctly', () => {
  const tree = renderer.create(<NumericInput unit={'ml'} />).toJSON();

  expect(tree).toMatchSnapshot();
});
