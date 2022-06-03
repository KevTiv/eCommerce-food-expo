import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export const ProfilePicture = ({url}:{url:string}) => {
  return (
    <View style={styles.profilePic}>
      <Image source={{uri: url}} style={{width: '100%', height: '100%'}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  profilePic:{
    zIndex: 5,
    width: 42, 
    aspectRatio: 1, 
    borderRadius: 8, 
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: 'white',
  }
})
