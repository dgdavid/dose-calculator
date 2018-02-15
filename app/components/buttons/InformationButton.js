import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { formatDate } from '../../lib/utils';

const InformationButton = ({ date, onPress }) => {
  if (!date) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View>
        <Text style={styles.info}>
          Calculated at {formatDate(date)}
        </Text>
        <Text style={styles.instructions}>Tap here to calculate again</Text>
      </View>
    </TouchableOpacity>
  );
};

// TODO: add proptypes

const styles = StyleSheet.create({
  info: {
    padding: 8,
    alignSelf: 'center',
  },

  instructions: {
    alignSelf: 'center',
    fontSize: 9,
  },
});

export default InformationButton;
