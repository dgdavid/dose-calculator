import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Row, Column, Label } from '../components/layout';
import { DateTimeInput, IsotopePicker, NumericInput } from '../components/fields';
import colors from '../config/colors';

export default () => (
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

    <Row size={2}>
      <Column style={styles.columnLeft}>
        <Label text="Initial activity" />
        <NumericInput unit={'mCi'} />
      </Column>

      <Column>
        <Label text="Initial volume" />
        <NumericInput unit={'mL'} />
        <View>
          <Text style={styles.warningEmoji}>{'\u26A0\uFE0F'}</Text>
          <Text style={styles.warning}>There is less volume than needed</Text>
        </View>
      </Column>
    </Row>

    <Row size={2}>
      <Column style={styles.columnLeft}>
        <Label text="Desired activity" />
        <NumericInput unit={'mCi'} />
      </Column>

      <Column>
        <Label text="Needed volume" />
        <NumericInput unit={'mL'} />
      </Column>
    </Row>

    <Row size={1.3}>
      <Column style={styles.columnLeft}>
        <Label text="Current activity" />
        <NumericInput
          unit={'mCi'}
          style={styles.smallNumber}
          unitStyle={styles.smallUnit}
        />
      </Column>

      <Column>
        <Label text="Vial concentration" />
        <NumericInput
          editable={false}
          unit={'mL'}
          style={styles.smallNumber}
          unitStyle={styles.smallUnit}
        />
      </Column>
    </Row>

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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },

  columnLeft: {
    borderRightColor: colors.materialGray400,
    borderRightWidth: 0.5,
  },

  info: {
    padding: 10,
    alignSelf: 'center',
  },

  warning: {
    color: colors.materialDeepOrange500,
    fontSize: 10,
    alignSelf: 'center',
  },

  warningEmoji: {
    fontSize: 15,
    alignSelf: 'center',
  },

  smallNumber: {
    fontSize: 20,
  },

  smallUnit: {
    fontSize: 10,
    padding: 0,
  },
});
