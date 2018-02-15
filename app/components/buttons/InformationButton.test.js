import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { DateTime } from 'luxon';

import InformationButton from './InformationButton';

test('renders correctly when date is given', () => {
  const date = DateTime.utc(2018, 1, 31, 17, 50);

  const tree = renderer.create(
    <InformationButton date={date} /> // eslint-disable-line
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('rendering nothing when date is not given', () => {
  const tree = renderer.create(<InformationButton />).toJSON();

  expect(tree).toMatchSnapshot();
});
