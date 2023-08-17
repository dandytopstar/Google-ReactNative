import React from 'react'
import { Text } from 'react-native'

import { MAIN_TEXT_COLOR } from '../../config'

const WEIGHT_KEYS = {
  100: 'Thin',
  200: 'UltraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
}

const AppText = ({children, color = MAIN_TEXT_COLOR, size = 12, weight = 700, italic, center, style, ...props}) => {
  const styles = {
    fontSize: size,
    fontFamily: `PublicSans-${WEIGHT_KEYS[weight]}${italic ? 'Italic' : ''}`,
    color: color,
    textAlign: center ? 'center' : 'left',
  }
  return (
    <Text style={[styles, style]} {...props}>{ children }</Text>
  )
}

export default AppText
