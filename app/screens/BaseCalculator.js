import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Row, Column, Label } from '../components/layout';
import { DateTimeInput, IsotopePicker } from '../components/fields';
import colors from '../config/colors';

class BaseCalculator extends React.Component {

  constructor(props) {
    super(props);

    this.textInputs = {};

    // bindings
    this.fields = this.fields.bind(this); // must be implemented by children
    this.saveInputRef = this.saveInputRef.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  /**
   * Stores a input reference
   *
   * @params {string|number} id - input identifier
   * @params {*} ref - TextInput reference
   */
  saveInputRef(id, ref) {
    this.textInputs[id] = ref;
  }

  /**
   * Set focus to input for given identifier
   *
   * @params {string|number} id - input identifier
   */
  focusInput(id) {
    this.textInputs[id].focus();
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Row size={0.3} />

        <Row>
          <Column>
            <Label text="Isotope" />
            <IsotopePicker prompt="Technetium 99m" />
          </Column>
        </Row>

        <Row>
          <Column>
            <Label text="Calibration Date" />
            <DateTimeInput />
          </Column>
        </Row>

        <Row size={0.2} />

        { this.fields() }

        <Row>
          <Column>
            <Label
              shadow={false}
              text="·"
            />
            <Text style={styles.info}>Information about the calculation</Text>
          </Column>
        </Row>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },

  info: {
    padding: 10,
    alignSelf: 'center',
  },
});

export default BaseCalculator;
