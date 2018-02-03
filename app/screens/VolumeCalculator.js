import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'unistore/react';

import actions from '../actions';

import colors from '../config/colors';
import { formatDate } from '../lib/utils';

import { Row, Column, Label } from '../components/layout';
import { DateTimeInput, IsotopePicker, NumericInput } from '../components/fields';

class VolumeCalculator extends React.Component {

  constructor(props) {
    super(props);

    this.registeredInputs = {};

    // binding
    this.registerInput = this.registerInput.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // Only re-render if there are new values
    return [
      'neededVolume',
      'currentActivity',
      'vialConcentration',
    ].some((prop) => this.props[prop] !== nextProps[prop]);
  }

  /**
   * Stores a input reference
   *
   * @params {string|number} id - input identifier
   * @params {*} ref - TextInput reference
   */
  registerInput(id, ref) {
    this.registeredInputs[id] = ref;
  }

  /**
   * Set focus to input for given identifier
   *
   * @params {string|number} id - input identifier
   */
  setFocus(id) {
    this.registeredInputs[id].focus();
  }


  // FIXME: only do calculation if something changed
  handleChange(data) {
    this.props.calculateVolume(data);
  }

  renderWarning() {
    if (this.props.lessVolumeThanNeeded) {
      return (
        <View>
          <Text style={styles.warningEmoji}>{'\u26A0\uFE0F'}</Text>
          <Text style={styles.warning}>There is less volume than needed</Text>
        </View>
      );
    }

    return null;
  }

  renderInformation() {
    if (this.props.calculationDate) {
      return (
        <TouchableOpacity
          onPress={() => this.handleChange()}
        >
          <View>
            <Text style={styles.info}>
              Calculated at {formatDate(this.props.calculationDate)}
            </Text>
            <Text style={styles.instructions}>Tap here to calculate again</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return null;
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Row size={0.3} />

        <Row>
          <Column>
            <Label text="Isotope" />
            <IsotopePicker
              isotope={this.props.isotope}
              onValueChange={(isotope) => this.handleChange({ isotope })}
            />
          </Column>
        </Row>

        <Row>
          <Column>
            <Label text="Calibration Date" />
            <DateTimeInput
              date={this.props.calibrationDate}
              onChange={(calibrationDate) => this.handleChange({ calibrationDate })}
            />
          </Column>
        </Row>

        <Row size={0.2} />

        <Row size={2}>
          <Column style={styles.columnLeft}>
            <Label text="Initial activity" />
            <NumericInput
              unit="mCi"
              returnKeyType="next"
              defaultValue={`${this.props.initialActivity}`}
              registerInput={(input) => this.registerInput('initialActivity', input)}
              onEndEditing={(event) => {
                this.handleChange({ initialActivity: event.nativeEvent.text });
                this.setFocus('initialVolume');
              }}
            />
          </Column>

          <Column>
            <Label text="Initial volume" />
            <NumericInput
              unit="mL"
              returnKeyType="next"
              defaultValue={`${this.props.initialVolume}`}
              registerInput={(input) => this.registerInput('initialVolume', input)}
              onEndEditing={(event) => {
                this.handleChange({ initialVolume: event.nativeEvent.text });
                this.setFocus('desiredActivity');
              }}
            />
            { this.renderWarning() }
          </Column>
        </Row>

        <Row size={2}>
          <Column style={styles.columnLeft}>
            <Label text="Desired activity" />
            <NumericInput
              unit="mCi"
              defaultValue={`${this.props.desiredActivity}`}
              registerInput={(input) => this.registerInput('desiredActivity', input)}
              onEndEditing={(event) => {
                this.handleChange({ desiredActivity: event.nativeEvent.text });
              }}
            />
          </Column>

          <Column>
            <Label text="Needed volume" />
            <NumericInput
              unit="mL"
              editable={false}
              defaultValue={`${this.props.neededVolume}`}
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
              defaultValue={`${this.props.currentActivity}`}
            />
          </Column>

          <Column>
            <Label text="Vial concentration" />
            <NumericInput
              unit="mCi/mL"
              editable={false}
              style={styles.smallNumber}
              unitStyle={styles.smallUnit}
              defaultValue={`${this.props.vialConcentration}`}
            />
          </Column>
        </Row>

        <Row size={1}>
          <Column>
            <Label
              shadow={false}
              text="·"
            />
            { this.renderInformation() }
          </Column>
        </Row>
      </View>
    );
  }

}

VolumeCalculator.defaultProps = {
  isotope: 'technetium-99m',
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },

  info: {
    padding: 8,
    alignSelf: 'center',
  },

  instructions: {
    alignSelf: 'center',
    fontSize: 9,
  },

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

const mapStateToProps = (state) => ({ ...state });

export { VolumeCalculator }; // for tests purpuose

export default connect(mapStateToProps, actions)(VolumeCalculator);
