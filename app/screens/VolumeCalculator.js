import React, { Fragment } from 'react';
import { StyleSheet, Text } from 'react-native';

import { Row, Column, Label } from '../components/layout';
import { DateTimeInput, IsotopePicker, NumericInput } from '../components/fields';
import colors from '../config/colors';

export default () => (
  <Fragment>
    <Row size={0.2} />

    <Row size={0.9}>
      <Column>
        <Label text="Isotope" lineStyle={{ width: '50%' }} />
        <IsotopePicker prompt="Technetium 99m" />
      </Column>
    </Row>

    <Row size={0.9}>
      <Column>
        <Label text="Calibration Date" />
        <DateTimeInput />
      </Column>
    </Row>

    <Row size={0.2} />

    <Row size={2}>
      <Column style={styles.columnLeft}>
        <Label text="Initial activity" />
        <NumericInput unit={'mci'} />
      </Column>

      <Column>
        <Label text="Initial volume" />
        <NumericInput unit={'ml'} />
        <Text style={styles.warning}>{'\u26A0\uFE0F'} There is less volume than needed</Text>
      </Column>
    </Row>

    <Row size={2}>
      <Column style={styles.columnLeft}>
        <Label text="Desired activity" />
        <NumericInput unit={'mci'} />
      </Column>

      <Column>
        <Label text="Needed volume" />
        <NumericInput unit={'ml'} />
      </Column>
    </Row>

    <Row size={1.3}>
      <Column style={styles.columnLeft}>
        <Label text="Current activity" />
        <NumericInput
          unit={'mci'}
          style={styles.smallNumber}
          unitStyle={styles.smallUnit}
        />
      </Column>

      <Column>
        <Label text="Vial concentration" />
        <NumericInput
          editable={false}
          unit={'ml'}
          style={styles.smallNumber}
          unitStyle={styles.smallUnit}
        />
      </Column>
    </Row>

    <Row>
      <Column>
        <Label text="·" />
        <Text style={styles.info}>Information about the calculation</Text>
      </Column>
    </Row>
  </Fragment>
);

const styles = StyleSheet.create({
  columnLeft: {
    borderRightColor: colors.gray80,
    borderRightWidth: 0.5,
  },

  info: {
    padding: 10,
    alignSelf: 'center',
  },

  warning: {
    color: colors.orangered,
    fontSize: 10,
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
