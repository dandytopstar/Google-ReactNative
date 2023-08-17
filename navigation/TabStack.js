import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CommonActions } from '@react-navigation/native'

import TabBar from '../components/TabBar'
import Header from '../components/Header'

import AnalyticsScreen from '../screens/Analytics'
import ReviewsScreen from '../screens/Reviews'
import FeedbacksScreen from '../screens/Feedbacks'
import ProfileScreen from '../screens/Profile'
import RequestsScreen from '../screens/Requests'

const Stack = createBottomTabNavigator()

const STACK_CONFIG = {
  headerShown: true,
}

const routesToExclude = ['Auth', 'Splash']

const TabStack = ({navigation}) => {

  useEffect(() => {
    navigation.dispatch(state => {
      const routes = state.routes.filter(r => !routesToExclude.includes(r.name))
      const diff = state.routes.length - routes.length
      return CommonActions.reset({...state, routes, index: state.index - diff})
    })
  }, [])

  return (
    <Stack.Navigator
      screenOptions={STACK_CONFIG}
      tabBar={props => <TabBar {...props} />}>
      <Stack.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          header: (props) => <Header {...props} title="Analytics" />
        }} />
      <Stack.Screen
        name="Reviews"
        component={ReviewsScreen}
        options={{
          header: (props) => <Header {...props} title="Google Reviews" />
        }} />
      <Stack.Screen
        name="Feedbacks"
        component={FeedbacksScreen}
        options={{
          header: (props) => <Header {...props} title="Employee feedback" />
        }} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false
        }} />
      <Stack.Screen
        name="Requests"
        component={RequestsScreen}
        options={{
          header: (props) => <Header {...props} title="Approval & Deny" />
        }} />
    </Stack.Navigator>
  )
}

export default TabStack
