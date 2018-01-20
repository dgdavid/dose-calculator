import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BaseCalculator from './BaseCalculator';
import { Row, Column, Label } from '../components/layout';
import { NumericInput } from '../components/fields';
import colors from '../config/colors';

class VolumeCalculator extends BaseCalculator {

  fields() {
    return (
      <Fragment>
        <Row size={2}>
          <Column style={styles.columnLeft}>
            <Label text="Initial activity" />
            <NumericInput
              unit="mCi"
              inputKey="initialActivity"
              nextInput="initialVolume"
              focusNext={this.focusInput}
              saveRef={this.saveInputRef}
            />
          </Column>

          <Column>
            <Label text="Initial volume" />
            <NumericInput
              unit="mL"
              inputKey="initialVolume"
              nextInput="desiredActivity"
              focusNext={this.focusInput}
              saveRef={this.saveInputRef}
            />
            <View>
              <Text style={styles.warningEmoji}>{'\u26A0\uFE0F'}</Text>
              <Text style={styles.warning}>There is less volume than needed</Text>
            </View>
          </Column>
        </Row>

        <Row size={2}>
          <Column style={styles.columnLeft}>
            <Label text="Desired activity" />
            <NumericInput
              unit="mCi"
              inputKey="desiredActivity"
              saveRef={this.saveInputRef}
            />
          </Column>

          <Column>
            <Label text="Needed volume" />
            <NumericInput
              unit="mL"
              editable={false}
            />
          </Column>
        </Row>

        <Row size={1.3}>
          <Column style={styles.columnLeft}>
            <Label text="Current activity" />
            <NumericInput
              unit="mCi"
              editable={false}
              style={styles.smallNumber}
              unitStyle={styles.smallUnit}
            />
          </Column>

          <Column>
            <Label text="Vial concentration" />
            <NumericInput
              unit="mL"
              editable={false}
              style={styles.smallNumber}
              unitStyle={styles.smallUnit}
            />
          </Column>
        </Row>
      </Fragment>
    );
  }

}

const styles = StyleSheet.create({
  columnLeft: {
    borderRightColor: colors.materialGray400,
    borderRightWidth: 0.5,
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

export default VolumeCalculator;
