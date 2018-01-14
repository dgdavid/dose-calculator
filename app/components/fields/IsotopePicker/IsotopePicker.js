import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Picker, Text } from 'react-native';

import isotopes from '../../../data/isotopes';

const IsotopePickerOptions = Object.keys(isotopes).map((key) => (
  <Picker.Item
    label={isotopes[key].name}
    key={key}
    value={key}
  />
));

const IsotopePicker = ({ prompt, ...props }) => (
  <Fragment>
    <Text style={styles.prompt}>{prompt}</Text>
    <Picker
      style={styles.picker}
      {...props}
    >
      {IsotopePickerOptions}
    </Picker>
  </Fragment>
);

IsotopePicker.propTypes = {
  prompt: PropTypes.string,
};

IsotopePicker.defaultProps = {
  prompt: 'Select isotope',
};

const colors = {
  dimGray: '#6A6A6A',
};

const styles = {
  prompt: {
    color: colors.dimGray,
    fontSize: 30,
    paddingTop: 5,
    alignSelf: 'center',
  },

  picker: {
    position: 'absolute',
    top: 0,
    width: 1000,
    height: 1000,
  },
};

export default IsotopePicker;
