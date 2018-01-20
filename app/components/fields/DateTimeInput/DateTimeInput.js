import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { DateTime } from 'luxon';

import colors from '../../../config/colors';

class DateTimeInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    // bindings
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.handler = this.handler.bind(this);
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  handler(date) {
    this.props.onChange(date);

    this.hide();
  }

  render() {
    const { date, format, zone } = this.props;

    const dt = DateTime.fromJSDate(date, { zone });
    const formattedDate = dt.toLocaleString(format);

    return (
      <TouchableOpacity onPress={() => this.show()}>
        <Text style={styles.caption}>{formattedDate}</Text>
        <DateTimePicker
          {...this.props}
          mode={'datetime'}
          isVisible={this.state.visible}
          onConfirm={this.handler}
          onCancel={this.hide}
        />
      </TouchableOpacity>
    );
  }

}

DateTimeInput.propTypes = {
  format: PropTypes.object,
  onChange: PropTypes.func,
  date: DateTimePicker.propTypes.date,
  zone: PropTypes.string,
};

DateTimeInput.defaultProps = {
  format: DateTime.DATETIME_SHORT,
  onChange: () => {},
  date: new Date(),
  zone: 'local',
};

const styles = StyleSheet.create({
  caption: {
    color: colors.materialBlueGray500,
    fontSize: 30,
    paddingTop: 5,
    alignSelf: 'center',
  },
});

export default DateTimeInput;
