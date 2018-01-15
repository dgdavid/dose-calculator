import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Picker, Text, View } from 'react-native';

import isotopes from '../../../data/isotopes';
import colors from '../../../config/colors';

const IsotopePickerOptions = Object.keys(isotopes).map((key) => (
  <Picker.Item
    label={isotopes[key].name}
    key={key}
    value={key}
  />
));

const IsotopePicker = ({ prompt, ...props }) => (
  <Fragment>
    <View style={styles.wrapper}>
      <Text style={styles.prompt}>{prompt}</Text>
      <Picker
        style={styles.picker}
        {...props}
      >
        {IsotopePickerOptions}
      </Picker>
    </View>
  </Fragment>
);

IsotopePicker.propTypes = {
  prompt: PropTypes.string,
};

IsotopePicker.defaultProps = {
  prompt: 'Select isotope',
};

const styles = {
  wrapper: {
    // Fix to get Picker clipped at the edges of wrapper and make the "prompt trick" works.
    // See https://github.com/facebook/react-native/issues/7817#issuecomment-264851951 to know more.
    borderWidth: 0,
  },

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
