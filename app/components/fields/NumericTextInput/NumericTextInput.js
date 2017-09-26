import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

function NumericTextInput(props) {
  const { style: receivedStyles, ...receivedProps } = props;

  return (
    <TextInput
      underlineColorAndroid="transparent"
      keyboardType="numeric"
      style={[styles.base, receivedStyles]}
      {...receivedProps}
    />
  );
}

export default NumericTextInput;
