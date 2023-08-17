import React, { useEffect } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'

import $auth from '../store/auth'

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    initApp()
  }, [])

  const initApp = async () => {
    const storedToken = await AsyncStorage.getItem('token')
    if (storedToken) {
      // await AsyncStorage.removeItem('token')
      dispatch($auth.set.token(storedToken))
      navigation.navigate('Home')
      return
    }
    navigation.navigate('Auth')
  }

  return (
    <View>
    </View>
  )
}

export default SplashScreen
