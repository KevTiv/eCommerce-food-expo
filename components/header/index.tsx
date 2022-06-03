import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import {ProfilePicture} from '../imageContainer'
import { colors } from '../../assets/colors'
import { userInfo } from '../../@types'
import * as Haptics from 'expo-haptics'

const IconAlert = ({color}:{color:string})=>{
  return (
    <View style={{position: 'absolute',right:-4, top:-2, width: 12,aspectRatio: 1, backgroundColor:color, borderRadius: 6,zIndex:10}}/>
  )
}

const Header = ({user, isPendingOrder}:{user:userInfo, isPendingOrder:boolean}) => {
  return (
    <>
      <View style={styles.headerContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ProfilePicture url={user.img}/>
            <Text style={{fontSize:16, fontWeight: '600', paddingHorizontal:10}}>
              {`Hi, ${user.first_name}`}
            </Text>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <TouchableOpacity
              onPress={()=>Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
            >
              {isPendingOrder ? <IconAlert color={colors['warning-alert-color']}/> : null}
              <AntDesign name="shoppingcart" size={28} color="black" />
            </TouchableOpacity>
          </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent:'space-between', 
    height: 64, 
    marginTop: 12,
    paddingHorizontal: 8, 
    backgroundColor:colors['header-background-color'],
    borderRadius: 8,
    shadowColor: colors['shadow-background-color'],
    shadowOpacity: 0.2,
    shadowOffset:{
      height: 12,
      width:12
    },
    shadowRadius: 28,
    zIndex: 50
  }
})
export default Header