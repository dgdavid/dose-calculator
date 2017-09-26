import React from 'react';
import { Picker } from 'react-native';

function IsotopePicker(props) {
  const { isotopes, ...receivedProps } = props;

  return (
    <Picker {...receivedProps}>
      {
        Object.keys(isotopes).map((key) =>
          <Picker.Item label={isotopes[key].name} value={key} key={key} />)
      }
    </Picker>
  );
}

export default IsotopePicker;
