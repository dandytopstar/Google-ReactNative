import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Header from '../components/Header'

import AuthScreen from '../screens/Auth'
import SplashScreen from '../screens/Splash'
import NotificationsScreen from '../screens/Notifications'
import TabStack from './TabStack'

const Stack = createNativeStackNavigator()

const STACK_CONFIG = {
  headerShown: false
}

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={STACK_CONFIG}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen} />
      <Stack.Screen
        name="Auth"
        component={AuthScreen} />
      <Stack.Screen
        name="Home"
        component={TabStack} />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: true,
          header: (props) => <Header {...props} title="Notifications" showNotifications={false} />
        }} />
    </Stack.Navigator>
  )
}

export default Navigation

