import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { AuthContext } from '../contexts'

import ProfileImage from '../components/ProfileImage'
import AppText from '../components/App/Text'
import AppSwitch from '../components/App/Switch'
import AppButton from '../components/App/Button'
import { ProfileIcon } from '../components/Icons'

const ProfileScreen = () => {
  const insets = useSafeAreaInsets()

  const [isAutomated, setIsAutomated] = useState(false)

  const user = useContext(AuthContext)

  const handleChangeAutomated = value => {
    setIsAutomated(value)
  }

  return (
    <View style={[styles.container, {paddingTop: insets.top+59}]}>
      <ProfileImage size={105} uri={user.picture} style={{marginBottom: 8}} />
      <AppText size={22}>{ user.firstName } { user.lastName }</AppText>
      <AppText color="#8083A3" size={14} weight={400}>{ user.email }</AppText>
      <View style={styles.card}>
        <ProfileIcon style={{marginRight: 11}} />
        <AppText>Account information</AppText>
      </View>
      <View style={styles.row}>
        <AppText>AI automated review responses</AppText>
        <AppSwitch active={isAutomated} onChange={handleChangeAutomated} />
      </View>
      <AppButton>
        Monitor Google Business profile
      </AppButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    height: 56,
    width: '100%',
    borderRadius: 14,
    shadowColor: '#999BA8',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  }
})

export default ProfileScreen
