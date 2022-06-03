import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons' 
import React, { useState } from 'react'
import { colors } from '../../assets/colors'
import * as Haptics from 'expo-haptics'
import { LinearGradient } from 'expo-linear-gradient';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Navbar = ({isPendingOrder}:{isPendingOrder:boolean}) => {
  return (
    <View style={styles.navWrapper}>
        <LinearGradient 
            colors={['#ffffff', '#f0f0f0']} 
            style={styles.container}
        >
            <TouchableOpacity style={styles.navOption}>
                <AntDesign name="home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navOption}>
                <Entypo name="location" size={24} color="black" />
            </TouchableOpacity>
            {isPendingOrder ? 
                <View style={styles.navOption}>
                    <TouchableOpacity 
                        onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                        style={styles.pendingOrderOption}
                    >
                        <Ionicons name="cart" size={28} color="white" />
                    </TouchableOpacity>
                </View>
                :
                <></>
            }
            <TouchableOpacity style={styles.navOption}>
                <Ionicons name="md-basket-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navOption}>
                <AntDesign name="setting" size={24} color="black" />
            </TouchableOpacity>
        </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    navWrapper:{
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 0,
        backgroundColor: '#efefef',
        width: WIDTH,
        height: HEIGHT * 0.1,
        borderRadius: 12,
        zIndex:30,
        shadowColor: colors['shadow-background-color'],
        shadowOpacity: 0.05,
        shadowOffset:{
        height: 1,
        width:0
        },
        shadowRadius: 2,
    },
    container:{
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'visible'
    },
    navOption:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 52,
        height: '100%',
        marginHorizontal: 14
    },
    pendingOrderOption:{
        position: 'absolute',
        top: -10,
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: colors['warning-alert-color'],
        width: 50,
        aspectRatio: 1,
        borderRadius: 25,
    }
})

export default Navbar