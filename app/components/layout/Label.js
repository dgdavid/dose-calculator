import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, View } from 'react-native';

import colors from '../../config/colors';

const Label = ({ text, textStyle, wrapperStyle, lineStyle, toUpperCase, shadow }) => {
  const textStyles = [styles.text, textStyle];
  const formattedText = toUpperCase ? text.toUpperCase() : text;

  if (shadow) {
    textStyles.push(styles.shadow);
  }

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <View style={[styles.line, lineStyle]} />
      <Text style={textStyles}>{ formattedText }</Text>
    </View>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  wrapperStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
  lineStyle: View.propTypes.style,
  toUpperCase: PropTypes.bool,
  shadow: PropTypes.bool,
};

Label.defaultProps = {
  toUpperCase: true,
  shadow: true,
};

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    height: 20,
    marginLeft: '5%',
  },

  line: {
    alignSelf: 'center',
    borderBottomColor: colors.materialGray400,
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

  shadow: {
    elevation: 1,
    shadowColor: colors.materialGray900,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
  },
});

export default Label;
