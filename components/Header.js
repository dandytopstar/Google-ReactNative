import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { HEADER_HEIGHT } from '../config'

import AppText from './App/Text'
import { NotificationIcon, ChevronIcon } from './Icons'

const Header = ({navigation, route, title, showNotifications = true, back}) => {
  const handlePressNotifications = () => {
    navigation.navigate('Notifications')
  }

  return (
    <View style={styles.container}>
      {
        back
          ? <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
              <ChevronIcon />
            </TouchableOpacity>
          : <View style={{width: 36}} />
      }
      <AppText size={16}>{ title }</AppText>
      {
        showNotifications
          ? <TouchableOpacity style={styles.button} onPress={handlePressNotifications}>
              <NotificationIcon />
            </TouchableOpacity>
          : <View style={{width: 36}} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(228, 230, 232, 0.6)',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: 36,
    alignItems: 'flex-end'
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 4,
    backgroundColor: '#F5F5FA',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Header
