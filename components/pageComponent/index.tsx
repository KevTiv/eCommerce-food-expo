import { StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../assets/colors'

type wrapperComponentPropsType = {
  children: ReactNode
}
const PageWrapper = (props: wrapperComponentPropsType) => {
  return (
    
    <SafeAreaView style={styles.pageWrapper}>
      {props.children}
    </SafeAreaView>
  )
}

export default PageWrapper

const styles = StyleSheet.create({
  pageWrapper: {
    backgroundColor: colors['primary-background-color'],
    width: '100%',
    height: '100%',
    padding: 2,
    zIndex: -5
  },
})
