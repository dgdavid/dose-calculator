import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { DateTime } from 'luxon';

import { VolumeCalculator } from './VolumeCalculator';
import isotopes from '../data/isotopes';

jest.mock('../data/isotopes');

jest.mock('../components/fields/DateTimeInput');

const calculationDate = DateTime.utc(2018, 1, 31, 17, 50);

// FIXME: for test purpose, "i2" is being considered a default value

describe('renders correctly', () => {
  test('whit default values', () => {
    const tree = renderer.create(<VolumeCalculator isotope={isotopes.i2} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('when `calculationDate` prop it is present', () => {
    const tree = renderer.create(
      <VolumeCalculator
        isotope={isotopes.i2}
        calculationDate={calculationDate}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
