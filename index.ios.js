/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Map from './components/map';


export default class mymaps extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.marker} source={require('./src/image/mumimaps_placemark.svg')} />
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('mymaps', () => mymaps);
