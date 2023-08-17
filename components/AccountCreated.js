import React from 'react'
import { View, StyleSheet } from 'react-native'
import { openInbox, openComposer } from 'react-native-email-link'

import AppText from './App/Text'
import AppButton from './App/Button'
import { DynamicIcon } from './Icons'

const AccountCreated = ({onChangeForm}) => {

  const handlePressEmail = () => {
    openInbox()
    onChangeForm('turn_google_feature')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText size={16}>Account created</AppText>
      </View>
      <View style={styles.content}>
        <DynamicIcon type="check" style={{marginBottom: 29}} />
        <AppText size={36} style={{marginBottom: 8}}>Thank you!</AppText>
        <AppText center color="#8083A3" size={14} weight={400} style={{lineHeight: 21}}>We sent an email to catherine.shaw@gmail.com Click confirmation link in the email to verify your account</AppText>
        <AppButton style={{marginTop: 'auto'}} onPress={handlePressEmail}>Open Email App & Confirm</AppButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(228, 230, 232, 0.85)',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 38,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 28,
    flex: 1,
  }
})

export default AccountCreated
