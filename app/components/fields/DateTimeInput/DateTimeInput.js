import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { format as formatDate } from 'date-fns';

class DateTimeInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isDateTimePickerVisible: false,
    }
  }

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = (date) => {
    if (this.props.onChange) {
      this.props.onChange(date)
    }

    this.hideDateTimePicker();
  }

  render() {
    const { value, format } = this.props;
    const defaultFormat = 'MM/DD/YYYY HH:mm';
    const formattedValue = formatDate(value, format || defaultFormat);

    return (
      <TouchableOpacity onPress={() => this.showDateTimePicker()}>
        <Text>{formattedValue}</Text>
        <DateTimePicker
          mode={'datetime'}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </TouchableOpacity>
    );
  }
}

export default DateTimeInput;
