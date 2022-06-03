import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export const GoToCartBtn = () => {
  return (
      <View style={[styles.buttonContainer,{opacity: 0}]}>
        <TouchableOpacity>
          <LinearGradient colors={['#000000', '#0a0a0b', '#3f3f3f']} style={styles.btn}>
              <Text style={{fontSize: 18, fontWeight:'600', color: 'white'}}>Go to cart</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

  )
}

const styles = StyleSheet.create({
  buttonContainer:{
    position: 'absolute',
    bottom: 100,
    left: '30%',
    width: Dimensions.get('window').width * 0.4,
    height: 40,
    borderRadius: 12,
    overflow: 'hidden'
  },
  btn:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

