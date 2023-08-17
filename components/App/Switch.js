import React, { useRef, useEffect } from 'react'
import { View, StyleSheet, Animated, Pressable } from 'react-native'
import { MAIN_COLOR } from '../../config'

const Switch = ({active, onChange}) => {
  const translateXValue = useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    Animated.timing(translateXValue, {
      toValue: active ? 40-16-8 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [active])

  const handlePress = () => {
    onChange(!active)
  }

  return (
    <Pressable style={[styles.container, {backgroundColor: active ? MAIN_COLOR : 'rgba(23, 23, 33, 0.3)'}]} onPress={handlePress}>
      <Animated.View style={[styles.badge, {transform: [{translateX: translateXValue}]}]} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 22,
    backgroundColor: MAIN_COLOR,
    borderRadius: 11,
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  }
})

export default Switch
