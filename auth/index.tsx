import React, { useState, useEffect, MutableRefObject } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch} from 'react-redux'
import { user, jwtRefreshToken } from '../redux'
import { Customer, Login } from '../view'

export const AuthLayer = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const dispatch = useDispatch()
  
  const fetchSavedDataInAsyncStorage = async()=>{
    let savedUserInfo = await AsyncStorage.getItem('user_info')
    let savedToken =  await AsyncStorage.getItem('refresh_token')

    if(savedUserInfo && savedToken){
      dispatch(jwtRefreshToken(savedToken))
      dispatch(user(JSON.parse(savedUserInfo)))
      setIsAuth(true)
    }else{
      setIsAuth(false)
    }
  }
  
  useEffect(()=>{
    fetchSavedDataInAsyncStorage()
  },[])
  
  return (
    <>
      {
        isAuth ? <Customer /> : <Login setIsAuth={()=>setIsAuth(true)}/>
      }
    </>
  )
}
