import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { format as formatDate } from 'date-fns';

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
    const { date, format } = this.props;
    const formattedDate = formatDate(date, format);

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
  format: PropTypes.string,
  onChange: PropTypes.func,
  date: DateTimePicker.propTypes.date,
};

DateTimeInput.defaultProps = {
  format: 'MM/DD/YYYY · HH:mm',
  onChange: () => {},
  date: new Date(),
};

const colors = {
  dimGray: '#6A6A6A',
};

const styles = StyleSheet.create({
  caption: {
    color: colors.dimGray,
    fontSize: 30,
    paddingTop: 5,
    alignSelf: 'center',
  },
});

export default DateTimeInput;
