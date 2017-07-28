/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView from 'react-native-maps';
import markers from '../data'
import SvgUri from 'react-native-svg-uri';

const placemark = require('../src/image/mumimaps_placemark.svg')

export default class Map extends Component {
  state = {
    region: {
      latitude: 55.636809,
      longitude: 37.354303,
      latitudeDelta: 1, // hardcode zoom levels just for example
      longitudeDelta: 1,
    },
  }

   componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({
        region: {
          ...this.state.region,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }
      }),
      error => alert(JSON.stringify(error)), {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000
      }
    )
  }

  render() {
    console.log(12345, placemark)
    const markersView = markers.map((marker, index) =>
      <MapView.Marker
        key={`marker-state-${index}`}
        coordinate={{
          latitude: marker.latitude,
          longitude: marker.longitude,
        }}
      >
        <View>
          <SvgUri width="30" height="30" svgXmlData={placemark} />
          {/*<SvgUri style={styles.marker} source={require('../src/image/mumimaps_placemark.svg')} />*/}
        </View>
      </MapView.Marker>
    )

    return (
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          initialRegion={this.state.region}
        >
        { markersView }
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
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
