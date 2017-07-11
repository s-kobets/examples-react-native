/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView from 'react-native-maps';
import markers from '../data'
// import SvgUri from 'react-native-svg-uri';
import markerView from '../src/image/mumimaps_placemark.svg'
console.log(1234, markerView)

export default class Map extends Component {
  render() {
    const markersView = markers.map((marker, index) =>
      <MapView.Marker
        key={`marker-state-${index}`}
        coordinate={{
          latitude: marker.latitude,
          longitude: marker.longitude,
        }}
        image={require('../src/image/mumimaps_placemark.svg')}
      >
        <View style={styles.marker}>
          {/*<Image source={markerView} />*/}
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
            latitudeDelta: 1,
            longitudeDelta: 1,
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
    width: 30,
    height: 30,
    // backgroundColor: 'red',
  }
});
