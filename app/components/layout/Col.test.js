import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Col from './Col';

describe('render correctly', () => {
  test('receiving the `size` prop', () => {
    const tree = renderer.create(<Col size={2} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('without `size` prop', () => {
    const tree = renderer.create(<Col size={2} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
