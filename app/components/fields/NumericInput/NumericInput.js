import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../../../config/colors';

const NumericInput = ({ unit, unitStyle, style, ...props }) => {
  const textInputStyle = [
    styles.input,
    style,
  ];

  return (
    <View style={styles.wrapper}>
      <TextInput
        selectTextOnFocus
        underlineColorAndroid={'transparent'}
        keyboardType={'numeric'}
        style={textInputStyle}
        {...props}
      />
      <Text style={unitStyle}>{unit}</Text>
    </View>
  );
};

NumericInput.propTypes = {
  unit: PropTypes.string.isRequired,
  unitStyle: Text.propTypes.style,
  style: TextInput.propTypes.style,
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
});

export default NumericInput;
