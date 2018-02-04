import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Warning from './Warning';

const text = 'Example text for test `Warning`';

test('renders correctly when visible is `true`', () => {
  const tree = renderer.create(<Warning text={text} visible />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('rendering nothing when visible is `false`', () => {
  const tree = renderer.create(<Warning text={text} visible={false} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('rendering nothing when visible is not given', () => {
  const tree = renderer.create(<Warning text={text} />).toJSON();

  expect(tree).toMatchSnapshot();
});
