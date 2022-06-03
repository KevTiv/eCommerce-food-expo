import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors'
import * as Haptics from 'expo-haptics'
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

type productProps={
  product:{
    img: string,
    name: string,
    weight: string,
    calories: number,
    description: string,
    price: number,
    rating: number,
  }
}

export const CarouselItem = ({product}:productProps) => {
  return (
    <TouchableOpacity 
        style={styles.itemWrapper}
        onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
    >
        <LinearGradient 
          colors={['#ffffff', '#fefefe', '#ffffff', '#fdfdfd', '#f6f6f6', '#ffffff']} 
          style={styles.container}
        >
          {/* TITLE */}
          <Text style={styles.title}>
            {product.name}
          </Text>
          {/* IMAGE */}
          <View style={styles.imgContainer}>
            <Image source={{uri:product.img}} style={{width:'100%',height:'100%'}}/>
          </View>
          {/* QUICK INFO */}
          <View style={{flexDirection:'row', marginVertical: 6, justifyContent:'space-around', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                  <Text style={styles.quickInfo}>
                    {product.rating}
                  </Text>
                  <AntDesign name="staro" size={12} color={colors['stars-background-color']} />
                </View>
                <Text style={styles.quickInfo}>
                  {`${product.calories} Cal.`}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline'}}>
              <Text style={styles.quickInfo}>
                rwf 
              </Text>
              <Text style={[styles.quickInfo, {fontSize: 20, fontWeight:'700', color:colors['warning-text-color']}]}>
                {product.price}
              </Text>
            </View>
          </View>
          {/* DESCRIPTION */}
          <View style={{padding: 4}}>
            <Text numberOfLines={3} style={[styles.quickInfo,{fontWeight:'400'}]}>
              {product.description}
            </Text>
          </View>
        </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    itemWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH * 0.5, 
        height: HEIGHT * 0.4, 
        borderRadius: 10, 
        marginVertical: 10, 
        marginHorizontal: 5, 
        shadowColor: colors['shadow-background-color'],
        shadowOpacity: 0.05,
        shadowOffset:{
        height: 8,
        width:8
        },
        shadowRadius: 2,
    },
    container:{
      width: '98%',
      height: '96%',
      borderRadius: 10, 
      padding: 2,
      // alignItems: 'center',

    },
    imgContainer:{
      width: '100%',
      height: '45%',
      borderRadius: 4,
      overflow: 'hidden',
    },
    title:{
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 8,
      textTransform: 'uppercase',
      marginVertical: 4
    },
    quickInfo:{
      fontSize: 12,
      fontWeight: '500'
    }
})
