import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

import colors from '../../config/colors';

const Warning = ({ visible, text }) => {
  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      <Text style={styles.emoji}>{'\u26A0\uFE0F'}</Text>
      <Text style={styles.text}>{text}</Text>
    </Fragment>
  );
};

Warning.propTypes = {
  visible: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Warning.defaultProps = {
  visible: false,
};

const styles = StyleSheet.create({
  emoji: {
    fontSize: 15,
    alignSelf: 'center',
  },

  text: {
    color: colors.materialDeepOrange500,
    fontSize: 10,
    alignSelf: 'center',
  },
});

export default Warning;
