import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Picker, Text, View } from 'react-native';

import isotopes from '../../../data/isotopes';
import colors from '../../../config/colors';

/**
 * NOTE: The Picker component seems to be full of bugs.
 *
 * Here, thanks to issues and comments found at Github, there is two of them fixed in a not ideal
 * way:
 *
 * - To style prompt: building a custom one and positioning the picker out of the cutting edges of
 *   it container, to make it "invisible".
 *
 *    > See https://github.com/facebook/react-native/issues/7817#issuecomment-264851951
 *
 * - To fire onValueChange event in the first element: adding "selectedValue" prop.
 *
 *   > See https://github.com/facebook/react-native/issues/17219 and related issues quoted in
 *     first comment
 *   > Also see https://github.com/facebook/react-native/issues/13351
 *
 *   Maybe it would a good idea to change this component to something like
 *   `react-native-modal-selector`, but for now it will keep as is.
 */

const IsotopePickerOptions = Object.keys(isotopes).map((key) => (
  <Picker.Item
    label={isotopes[key].name}
    key={key}
    value={key}
  />
));

const IsotopePicker = ({ isotope, ...props }) => (
  <Fragment>
    <View style={styles.wrapper}>
      <Text style={styles.prompt}>{isotope.name}</Text>
      <Picker
        style={styles.picker}
        selectedValue={isotope.id} // see comments above
        {...props}
      >
        {IsotopePickerOptions}
      </Picker>
    </View>
  </Fragment>
);

IsotopePicker.propTypes = {
  isotope: PropTypes.object,
};

IsotopePicker.defaultProps = {
  isotope: {},
};

const styles = {
  wrapper: {
    // Fix to get Picker clipped at the edges of wrapper and make the "prompt trick" works.
    // See https://github.com/facebook/react-native/issues/7817#issuecomment-264851951 to know more.
    borderWidth: 0,
  },

  prompt: {
    color: colors.materialBlueGray500,
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
