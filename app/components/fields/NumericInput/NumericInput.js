import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../../../config/colors';

const NumericInput = ({ inputKey, saveRef, nextInput, focusNext, unit, unitStyle, style, ...props }) => (
  <View style={styles.wrapper}>
    <TextInput
      selectTextOnFocus
      underlineColorAndroid="transparent"
      keyboardType="numeric"
      style={[styles.input, style, props.editable === false && styles.disabled]} // eslint-disable-line
      ref={(input) => saveRef && saveRef(inputKey, input)}
      onSubmitEditing={() => focusNext && focusNext(nextInput)}
      {...props}
    />
    <Text style={unitStyle}>{unit}</Text>
  </View>
);

NumericInput.propTypes = {
  focusNext: PropTypes.func,
  inputKey: PropTypes.string,
  nextInput: PropTypes.string,
  saveRef: PropTypes.func,
  style: TextInput.propTypes.style,
  unit: PropTypes.string.isRequired,
  unitStyle: Text.propTypes.style,
};

NumericInput.defaultProps = {
  defaultValue: '0',
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
