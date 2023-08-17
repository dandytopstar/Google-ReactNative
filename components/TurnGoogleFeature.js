import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppText from './App/Text'
import AppButton from './App/Button'
import { DynamicIcon } from './Icons'

const TurnGoogleFeature = ({onTurnFeature}) => {

  const handleTurn = (turnOn) => () => {
    onTurnFeature()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText size={16}>Account created</AppText>
      </View>
      <View style={styles.content}>
        <DynamicIcon type="ask" style={{marginBottom: 29}} />
        <AppText size={36} style={{marginBottom: 8}}>Would you like to?</AppText>
        <AppText center color="#8083A3" size={14} weight={400} style={{lineHeight: 21, marginBottom: 40}}>Track your Google account, monitor reviews & activate AI powered review response</AppText>
        <AppButton onPress={handleTurn(true)}>Turn on</AppButton>
        <View style={[styles.row, {marginVertical: 26}]}>
          <View style={styles.line} />
          <AppText color="#8083A3" size={14} weight={400} style={{marginHorizontal: 30}}>Or</AppText>
          <View style={styles.line} />
        </View>
        <AppButton variant="secondary" onPress={handleTurn(false)}>Don't turn it on</AppButton>
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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    backgroundColor: '#E4E6E8',
    height: 1,
    flex: 1,
  },
})

export default TurnGoogleFeature
