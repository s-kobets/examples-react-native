import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }

  onRegionChange = (region) => {
    this.setState({ region })
  }

  render() {
    console.log(1231412, this.state.region)
    return (
        <MapView
          style={styles.container}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        />
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
