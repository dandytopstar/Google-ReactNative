import React from 'react'
import { View, StyleSheet, Platform, Pressable } from 'react-native'
import CheckBox from '@react-native-community/checkbox'

import AppText from './Text'
import { MAIN_COLOR } from '../../config'

const AppCheckBox = ({label, containerStyle, value, onChange}) => {
  return (
    <Pressable style={[styles.container, containerStyle]} onPress={() => onChange(!value)}>
      <CheckBox
        boxType="square"
        onCheckColor="#fff"
        onFillColor={MAIN_COLOR}
        onTintColor={MAIN_COLOR}
        animationDuration={0.2}
        tintColors={{true: MAIN_COLOR}}
        style={[styles.checkbox, {
          marginLeft: Platform.OS === 'android' ? -5 : 0,
        }]}
        value={value}
        disabled={true}
        />
      <AppText>{ label }</AppText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
  }
})

export default AppCheckBox
