import { SafeAreaView, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './login.style';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import { getGoogleOAuthToken, googleOAuthToken, jwtAccessToken, jwtRefreshToken } from '../../redux/state/tokenState';
import { Loader, GoogleSignIn } from './login.components';
import { getNewUserTokens } from '../../helpers/auth';
import { storeData } from '../../helpers/asyncStorage';

/*
    Video to expo auth session: https://www.youtube.com/watch?v=hmZm_jPvWWM&t=55s
    Github: https://github.com/chelseafarley/google-auth-demo/blob/master/App.js
*/

const GOOGLE_UID = '233933327565-48geu0kvb4bchkjq7u3mk0csjvssajpn.apps.googleusercontent.com';
WebBrowser.maybeCompleteAuthSession();

const Login = () => {
    const [isSigningIn,setIsSigningIn] = useState<boolean>(false)
    const [jwtTokens, setJwtTokens] = useState<{
        access_token:string,
        refresh_token:string
    }>()
    const dispatch = useDispatch()
    const googleOAuthTokenResult = useSelector(getGoogleOAuthToken)
    // const accessTokenRes = useSelector(getJwtAccessToken)
    // const refreshToken = useSelector(getJwtRefreshToken)
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: GOOGLE_UID,
        // iosClientId: GOOGLE_UID,
        // androidClientId: GOOGLE_UID,
        webClientId: GOOGLE_UID,
    });

    useEffect(() => {
        if (response?.type === 'success') {
            let googleOAuthAccessTokenResult = response.authentication?.accessToken
            dispatch(googleOAuthToken(googleOAuthAccessTokenResult!))
            
            setIsSigningIn(true)
        }
    }, [response]);

    const { status }=useQuery(['user_tokens',googleOAuthTokenResult], ()=>getNewUserTokens(googleOAuthTokenResult),{
        enabled: isSigningIn,
        retry: 3,
        retryDelay: 2000,
        onSuccess: async(data)=>{
            setJwtTokens(data)

            if(jwtTokens?.access_token) dispatch(jwtAccessToken(jwtTokens.access_token))
            if(jwtTokens?.refresh_token){ 
                dispatch(jwtRefreshToken(jwtTokens.refresh_token))
                await storeData('refresh_token', jwtTokens.refresh_token)
            }
            setIsSigningIn(false)
        },
        onError: ()=>setIsSigningIn(false)
    })
    
  return (
    <View style={styles.backgroundWrapper}>
        <Image 
            style={styles.backgroundImage}
            source={require('../../assets/img/login_background.png')}
        />
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    COMPANY
                </Text>
            </View>
            <View style={styles.loginContainer}>
                <TouchableOpacity
                    disabled={!request || isSigningIn}
                    onPress={async () => {
                        Haptics.selectionAsync()
                        promptAsync({
                            // showInRecents: true,
                            // useProxy: false
                        });
                        
                    }}
                >
                    <LinearGradient
                        colors={['#E5ECEE', '#F2F8FF', '#FFFFFF']}
                        style={styles.button}
                    >
                        {
                            status === 'loading' ? <Loader/> : <GoogleSignIn size={24}/>
                        }
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.cta}>
                    Please log into your account.
                </Text>
            </View>
        </SafeAreaView>
    </View>
  )
}

export default Login