import {TEST} from '@env'
import { Text, StyleSheet, Dimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../assets/colors'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import { default_geo_location } from '../../assets/geoLocation'
import { geoLocationType } from '../../@types'


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

/* 
  https://stackoverflow.com/questions/37429536/disable-user-interaction-form-mapview-in-react-native 
*/

const HomePageMap = () => {
  const [location, setLocation] = useState<geoLocationType>();
  const [errorMsg, setErrorMsg] = useState<string>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let res = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: res.coords.latitude,
        longitude: res.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);
  return (
    <View style={styles.mapContainer}>
      <MapView 
        style={{width:'100%', height:'100%'}}
        provider={'google'}
        onLongPress={()=>console.log('here')}
        initialRegion={location}
        pitchEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
        zoomTapEnabled={false}
      />
      {errorMsg ? 
        <Text style={{position:'absolute', bottom: 5, left: '20%', color:colors['warning-text-color'], fontWeight: '600'}}>{errorMsg}</Text>
        :
        null}
    </View>
  )
}

const styles = StyleSheet.create({
    mapContainer:{
        position: 'absolute', 
        top:0, 
        left:0, 
        zIndex: 0, 
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15, 
        width: WIDTH, 
        height: HEIGHT * 0.3, 
        overflow: 'hidden',
        backgroundColor:colors['map-background-color']
    }
})

export default HomePageMap