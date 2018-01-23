import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

const Col = ({ size, style, children, ...props }) => {
  const styles = [
    style,
    { flex: size },
  ];

  return (
    <View
      style={styles}
      {...props}
    >
      { children }
    </View>
  );
};

Col.propTypes = {
  size: PropTypes.number.isRequired,
  style: ViewPropTypes.style,
  children: PropTypes.node,
};

Col.defaultProps = {
  size: 1,
};

export default Col;
