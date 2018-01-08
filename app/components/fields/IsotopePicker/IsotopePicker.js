import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'react-native';

import isotopes from '../../../data/isotopes';

function IsotopePicker(props) {
  return (
    <Picker {...props}>
      {
        Object.keys(props.isotopes).map((key) =>
          <Picker.Item label={props.isotopes[key].name} value={key} key={key} />)
      }
    </Picker>
  );
}

IsotopePicker.propTypes = {
  isotopes: PropTypes.object,
};

IsotopePicker.defaultProps = {
  isotopes,
};

export default IsotopePicker;
