import { SafeAreaView, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './login.style'
import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from 'react-query'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as Haptics from 'expo-haptics'
import { LinearGradient } from 'expo-linear-gradient'
import {
  user,
  getGoogleOAuthToken,
  googleOAuthToken,
  jwtAccessToken,
  jwtRefreshToken,
} from '../../redux'
import { Loader, GoogleSignIn } from './login.components'
import { getUserAuthDetails } from '../../auth/function'
import { authResultType } from '../../@types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {GOOGLE_UID} from '@env'
/*
    Video to expo auth session: https://www.youtube.com/watch?v=hmZm_jPvWWM&t=55s
    Github: https://github.com/chelseafarley/google-auth-demo/blob/master/App.js
*/

WebBrowser.maybeCompleteAuthSession()

const Login = ({setIsAuth}:{setIsAuth:()=>void}) => {
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false)
  const dispatch = useDispatch()
  const googleOAuthTokenResult = useSelector(getGoogleOAuthToken)
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: GOOGLE_UID,
    // iosClientId: GOOGLE_UID,
    // androidClientId: GOOGLE_UID,
    webClientId: GOOGLE_UID,
  })

  useEffect(() => {
    if (response?.type === 'success') {
      let googleOAuthAccessTokenResult = response.authentication?.accessToken
      dispatch(googleOAuthToken(googleOAuthAccessTokenResult!))

      setIsSigningIn(true)
    }
  }, [response])

  const { status } = useQuery(['user_tokens', googleOAuthTokenResult],
    () => getUserAuthDetails(googleOAuthTokenResult),
    {
      enabled: isSigningIn,
      retry: 3,
      retryDelay: 2000,
      onSuccess: async (data) => {
        if (data.access_token) dispatch(jwtAccessToken(data.access_token))
        if (data.refresh_token) {
          dispatch(jwtRefreshToken(data.refresh_token))
          await AsyncStorage.setItem('refresh_token', data.refresh_token)
        }
        if (data.user_info) {
          dispatch(user(data.user_info))
          await AsyncStorage.setItem('user_info', JSON.stringify(data.user_info))
        }
        setIsSigningIn(false)
        setIsAuth()
      },
      onError: () => setIsSigningIn(false),
    }
  )

  return (
    <View style={styles.backgroundWrapper}>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/img/login_background.png')}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>COMPANY</Text>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity
            disabled={!request || isSigningIn}
            onPress={async () => {
              Haptics.selectionAsync()
              promptAsync({
                // showInRecents: true,
                // useProxy: false
              })
            }}
          >
            <LinearGradient colors={['#E5ECEE', '#F2F8FF', '#FFFFFF']} style={styles.button}>
              {status === 'loading' ? <Loader /> : <GoogleSignIn size={24} />}
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.cta}>Please log into your account.</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Login
