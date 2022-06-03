import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Dimensions, StyleSheet, View } from 'react-native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { AuthLayer } from './auth'
import { colors } from './assets/colors'


const queryClient = new QueryClient()
/*
  TODO: implement cache image
  https://github.com/wonday/react-native-image-cache-wrapper
  TODO: implement multiple layer stack navigation
  https://medium.com/@jacrplante/react-native-screens-multiple-stacks-da112a94ad24
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthLayer />
        </QueryClientProvider>
      </Provider>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['primary-background-color'],
    alignItems: 'center',
    justifyContent: 'center',
  },
})
