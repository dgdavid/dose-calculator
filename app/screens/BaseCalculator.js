import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Row, Column, Label } from '../components/layout';
import { DateTimeInput, IsotopePicker } from '../components/fields';
import colors from '../config/colors';

class BaseCalculator extends React.Component {

  constructor(props) {
    super(props);

    // bindings
    this.fields = this.fields.bind(this); // must be implemented by children
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
