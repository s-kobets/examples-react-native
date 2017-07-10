/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import markers from '../data'
// import SvgUri from 'react-native-svg-uri';

// console.log(1234, SvgUri)

export default class Map extends Component {
  render() {
    const markersView = markers.map((marker, index) =>
      <MapView.Marker
        key={`marker-state-${index}`}
        coordinate={{
          latitude: marker.latitude,
          longitude: marker.longitude,
        }}
      >
        <View style={styles.marker}>
          {/*<SvgUri
            width="30"
            height="30"
            source={require('../src/image/mumimaps_placemark.svg')}
          />*/}
        </View>
      </MapView.Marker>
    )

    return (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 55.636809,
            longitude: 37.354303,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        { markersView }
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    left: 30,
    right: 30,
    top: 60,
    bottom: 60,
    position: 'absolute',
    zIndex: 2,
  },
  radius: {
  },
  marker: {
    height: 30,
    width: 30,
    borderRadius: 50/2,
    backgroundColor: 'red',
  }
});
