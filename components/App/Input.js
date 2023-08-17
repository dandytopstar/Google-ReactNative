import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

import AppText from './Text'
import { MAIN_TEXT_COLOR } from '../../config'

const Input = ({label, containerStyle, ...props}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <AppText color="#8083A3" weight={400} size={14}>{ label }</AppText>
      <TextInput
        style={styles.input}
        placeholder="Start typing …"
        placeholderTextColor={'#8083A3'}
        {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 72,
  },
  input: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'PublicSans-Bold',
    color: MAIN_TEXT_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(228, 230, 232, 0.85)',
  }
})

export default Input
