import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Row = ({ size, style, children, ...props }) => {
  const styles = [
    style,
    { flex: size, flexDirection: 'row' },
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

Row.propTypes = {
  size: PropTypes.number.isRequired,
  style: View.propTypes.style,
  children: PropTypes.node,
};

Row.defaultProps = {
  size: 1,
};

export default Row;
