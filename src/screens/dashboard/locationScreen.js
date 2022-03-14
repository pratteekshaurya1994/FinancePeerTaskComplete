import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {COLORS} from '../../constants/colors';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

const LocationScreen = ({navigation}) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsLoaded(false);
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setLatitude(location.latitude);
        setLongitude(location.longitude);
        setIsLoaded(true);
        setIsLoading(false);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  return (
    <>
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.blackDark} />
        </View>
      )}
      {isLoaded && (
        <>
          <View style={styles.container}>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}>
              <Marker
                coordinate={{
                  latitude: latitude,
                  longitude: longitude,
                }}
              />
            </MapView>
          </View>
        </>
      )}
    </>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
