import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import DateTimeInput from './DateTimeInput';

test('renders correctly', () => {
  const date = new Date(Date.UTC(2018, 1, 8, 7, 30));

  const tree = renderer.create(
    <DateTimeInput
      date={date}
      zone="utc"
    /> // eslint-disable-line
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
