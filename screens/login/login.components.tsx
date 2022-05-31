import React from "react"
import { ActivityIndicator, View, Text } from "react-native"
import { colors } from "../../assets/colors"
import { styles } from "./login.style"
import { AntDesign } from '@expo/vector-icons';

export const Loader=()=>{
    return(
        <>
            <View style={styles.loadingContainer}>
                <ActivityIndicator/> 
            </View>
        </>
    )
}

export const GoogleSignIn=({size}:{size:number})=>{
    return(
        <>
            <AntDesign name="google" size={size} color={colors['primary-text-color']} />
            <Text style={styles.buttonTxt}>
                Continue with Google
            </Text>
        </>
    )
}