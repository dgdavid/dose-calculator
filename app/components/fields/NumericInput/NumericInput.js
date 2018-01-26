import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../../../config/colors';

const NumericInput = ({ unit, unitStyle, style, registerInput, ...props }) => (
  <View style={styles.wrapper}>
    <TextInput
      selectTextOnFocus
      keyboardType="numeric"
      underlineColorAndroid="transparent"
      ref={(input) => registerInput && registerInput(input)}
      style={[styles.input, style, props.editable === false && styles.disabled]} // eslint-disable-line
      {...props}
    />
    <Text style={unitStyle}>{unit}</Text>
  </View>
);

NumericInput.propTypes = {
  style: TextInput.propTypes.style,
  unit: PropTypes.string.isRequired,
  unitStyle: Text.propTypes.style,
  registerInput: PropTypes.func,
};

NumericInput.defaultProps = {
  unitStyle: null,
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    color: colors.materialBlueGray500,
    fontSize: 40,
    paddingBottom: 0,
    textAlign: 'center',
  },

  disabled: {
    color: colors.materialBlueGray300,
  },
});

export default NumericInput;
