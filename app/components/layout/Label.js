import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View } from 'react-native';

import colors from '../../config/colors';

const Label = ({ text, textStyle, wrapperStyle, lineStyle, toUpperCase }) => (
  <View style={[styles.wrapper, wrapperStyle]}>
    <View style={[styles.line, lineStyle]} />
    <Text style={[styles.text, textStyle]}>
      { toUpperCase ? text.toUpperCase() : text }
    </Text>
  </View>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  wrapperStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
  lineStyle: View.propTypes.style,
  toUpperCase: PropTypes.bool,
};

Label.defaultProps = {
  toUpperCase: true,
};

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    height: 20,
    marginLeft: '5%',
  },

  line: {
    alignSelf: 'center',
    borderBottomColor: colors.darkGray,
    borderBottomWidth: 0.5,
    marginTop: 10,
    width: '90%',
  },

  text: {
    fontSize: 10,
    marginTop: -7.5,
    marginLeft: 0,
    paddingLeft: 7.5,
    paddingRight: 7.5,
    alignSelf: 'center',
    backgroundColor: colors.white,
  },
});

export default Label;
