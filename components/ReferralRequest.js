import React, { useState, useEffect, Fragment } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { fetchUser } from '../api'

import AppText from './App/Text'
import AppButton from './App/Button'
import { DynamicIcon } from './Icons'

const ReferralRequest = ({initialData, onClose}) => {
  const insets = useSafeAreaInsets()
  const [user, setUser] = useState(initialData)
  const [currentMode, setCurrentMode] = useState('preview')
  
  useEffect(() => {
    fetchUser(user.id).then(res => {
      setUser(res)
    })
  }, [user])

  const handlePressApprove = () => {
    setCurrentMode('asking_approve')
  }

  const handlePressDeny = () => {
    setCurrentMode('asking_deny')
  }

  const handlePressAction = () => {
    setCurrentMode(currentMode === 'asking_approve' ? 'approved' : 'denied')
  }

  const handlePressBack = () => {
    onClose()
  }
  
  return (
    <View style={[styles.container, {paddingBottom: insets.bottom+16}]}>
      {
        (mode => {
          switch (mode) {
            case 'preview':
              return (
                <View style={styles.content}>
                  <AppText size={22}>Approve or Deny</AppText>
                  <AppText color="#8083A3" size={14} weight={400} style={{marginBottom: 24}}>Do you know this person? They would like to participate in your referral program</AppText>
                  <View style={styles.card}>
                    <AppText color="#8083A3" weight={500} style={{marginBottom: 4}}>Full Name</AppText>
                    <AppText>{ user.firstName } { user.lastName }</AppText>
                  </View>
                  <View style={styles.card}>
                    <AppText color="#8083A3" weight={500} style={{marginBottom: 4}}>Email</AppText>
                    <AppText>{ user.email }</AppText>
                  </View>
                  <View style={styles.card}>
                    <AppText color="#8083A3" weight={500} style={{marginBottom: 4}}>Phone Number</AppText>
                    <AppText>{ user.phone }</AppText>
                  </View>
                  <View style={[styles.card, {marginBottom: 24}]}>
                    <AppText color="#8083A3" weight={500} style={{marginBottom: 4}}>Purchase History:</AppText>
                    <AppText>See purchase history</AppText>
                  </View>
                  <AppButton style={{marginBottom: 8}} onPress={handlePressApprove}>Approve</AppButton>
                  <AppButton variant="warning" onPress={handlePressDeny}>Deny</AppButton>
                </View>
              )
            case 'asking_approve':
            case 'asking_deny':
              return (
                <View style={{flex: 1}}>
                  <View style={styles.header}>
                    <AppText size={16}>Confirmation</AppText>
                  </View>
                  <View style={{paddingHorizontal: 28, flex: 1, alignItems: 'center'}}>
                    <DynamicIcon type="ask" style={{marginBottom: 29}} />
                    <AppText size={36} center style={{marginBottom: 8}}>Are you sure?</AppText>
                    <AppText color="#8083A3" weight={400} size={14} center>Please, make sure you want to approve the user { user.firstName } { user.lastName }</AppText>
                    <AppButton style={{marginTop: 'auto'}} onPress={handlePressAction}>
                      { mode === 'asking_approve' ? 'Approve this user' : 'Deny this user'}
                    </AppButton>
                  </View>
                </View>
              )
            case 'approved':
              return (
                <View style={{flex: 1}}>
                  <View style={styles.header}>
                    <AppText size={16}>Confirmation</AppText>
                  </View>
                  <View style={{paddingHorizontal: 28, flex: 1, alignItems: 'center'}}>
                    <DynamicIcon type="success" style={{marginBottom: 29}} />
                    <AppText size={36} center style={{marginBottom: 8}}>Approved</AppText>
                    <AppText color="#8083A3" weight={400} size={14} center>The user { user.firstName } { user.lastName } now has been approved</AppText>
                    <AppButton style={{marginTop: 'auto'}} onPress={handlePressBack}>
                      Go back
                    </AppButton>
                  </View>
                </View>
              )
            case 'denied':
              return (
                <View style={{flex: 1}}>
                  <View style={styles.header}>
                    <AppText size={16}>Confirmation</AppText>
                  </View>
                  <View style={{paddingHorizontal: 28, flex: 1, alignItems: 'center'}}>
                    <DynamicIcon type="denied" style={{marginBottom: 29}} />
                    <AppText size={36} center style={{marginBottom: 8}}>Denied</AppText>
                    <AppText color="#8083A3" weight={400} size={14} center>The user { user.firstName } { user.lastName } now has been denied</AppText>
                    <AppButton style={{marginTop: 'auto'}} onPress={handlePressBack}>
                      Go back
                    </AppButton>
                  </View>
                </View>
              )
          }
        })(currentMode)
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: 'rgba(228, 230, 232, 0.6)',
    borderRadius: 14,
    marginBottom: 8,
    padding: 12,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(228, 230, 232, 0.85)',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 38,
    width: '100%',
  },
})

export default ReferralRequest
