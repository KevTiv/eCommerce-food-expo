import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from './redux/store'
import { Provider, useDispatch, useSelector } from 'react-redux'
import {Login, Home} from './screens';
import { useEffect, useState } from 'react';
import { getData } from './helpers/asyncStorage';
import { getJwtRefreshToken, jwtRefreshToken } from './redux/state/tokenState';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const screenOption={
  headerShown: false,
};
/*
  TODO: implement cache image
  https://github.com/wonday/react-native-image-cache-wrapper
  TODO: implement multiple layer stack navigation
  https://medium.com/@jacrplante/react-native-screens-multiple-stacks-da112a94ad24
*/


const Main=()=>{
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const dispatch = useDispatch()
  const initiateApp = async()=>{
    let token = await getData('refresh_token')
    if(token !== null && typeof(token) === 'string'){
      dispatch(jwtRefreshToken(token)) 
      setIsAuth(true)
    }
  }
  useEffect(()=>{
    initiateApp()
  },[])
  return(
    <>
      {isAuth ? <Home/> : <Login/>} 
    </>
    // <>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen options={screenOption} name="Home" component={Home} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Main/>
        </QueryClientProvider>
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(210,210,210)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
