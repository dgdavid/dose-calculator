import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Label from './Label';

describe('render correctly', () => {
  test('without props apart form required `text`', () => {
    const tree = renderer.create(<Label text="Label text in uppercases by default" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('setting `toUpperCase` to false', () => {
    const tree = renderer.create(<Label text="Label text rendered as is" toUpperCase={false} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
