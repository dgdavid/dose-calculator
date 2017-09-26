import React from 'react';
import { Button, Text, View } from 'react-native';

import IsotopePicker from '../fields/IsotopePicker';
import DateTimeInput from '../fields/DateTimeInput';
import NumericTextInput from '../fields/NumericTextInput';
import volumeCalculator from '../../lib/calculators/volume';

import isotopes from '../../data/isotopes';
import styles from './styles';

class Calculator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isotope: isotopes['technetium-99m'],
      isotopeKey: 'technetium-99m',
      calibrationDate: new Date(),
      calculationDate: null,
      initialVolume: null,
      initialActivity: null,
      currentActivity: null,
      desiredActivity: null,
      neededVolume: null,
      vialConcentration: null,
    };
  }

  calculate = () => {
    this.setState(volumeCalculator(this.state));
  }

  setIsotope = (isotopeKey) => {
    const isotope = isotopes[isotopeKey];

    this.setState({ isotopeKey, isotope });
  }

  setCalibrationDate = (calibrationDate) => this.setState({calibrationDate});
  setInitialActivity = (initialActivity) => this.setState({initialActivity});
  setDesiredActivity = (desiredActivity) => this.setState({desiredActivity});
  setInitialVolume = (initialVolume) => this.setState({initialVolume});

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Isotope</Text>
        <IsotopePicker
          isotopes={isotopes}
          selectedValue={this.state.isotopeKey}
          prompt="Select Isotope"
          style={{ padding: 0 }}
          onValueChange={(value, index) => this.setIsotope(value)}
        />
        <View style={styles.divider} />

        <Text style={styles.label}>Calibration date</Text>
        <DateTimeInput
          value={this.state.calibrationDate}
          format="DD/MM/YYYY HH:mm"
          onChange={(date) => this.setCalibrationDate(date)}
        />
        <View style={styles.divider} />

        <Text style={styles.label}>Initial volume</Text>
        <NumericTextInput onChangeText={(value) => this.setInitialVolume(value)} />
        <View style={styles.divider} />

        <Text style={styles.label}>Initial activity</Text>
        <NumericTextInput onChangeText={(value) => this.setInitialActivity(value)} />
        <View style={styles.divider} />

        <Text style={styles.label}>Desired activity</Text>
        <NumericTextInput onChangeText={(value) => this.setDesiredActivity(value)} />
        <View style={styles.divider} />

        <Button title="Calculate!" onPress={this.calculate} />

        <Text style={styles.label}>Needed volume</Text>
        <Text>{this.state.neededVolume}</Text>
        <View style={styles.divider} />
      </View>
    );
  }
}

export default Calculator;
