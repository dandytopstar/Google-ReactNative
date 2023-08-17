import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated, Pressable } from 'react-native'

import AppText from './Text'
import { MAIN_COLOR } from '../../config'

const Tabs = ({options, active, onChange, style, ...props}) => {
  const badgeValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const currentIndex = options.findIndex(el => el.key === active)
    Animated.timing(badgeValue, {
      toValue: currentIndex * 50,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [active])

  const handlePress = option => () => {
    onChange(option.key)
  }

  return (
    <View style={[styles.container, style]} {...props}>
      {
        options.map((option) => {
          const isActive = option.key === active
          return (
            <Pressable key={option.key} style={styles.option} onPress={handlePress(option)}>
              <AppText center color={isActive ? MAIN_COLOR : '#8083A3'}>{ option.title }</AppText>
            </Pressable>
          )
        })
      }
      <Animated.View style={[styles.badge, {transform: [{translateX: badgeValue}]}]}>
        <View style={styles.line} />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 49,
    alignItems: 'center',
  },
  option: {
    width: 50,
    height: '100%',
    justifyContent: 'center',
  },
  badge: {
    width: 50,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 7,
  },
  line: {
    backgroundColor: MAIN_COLOR,
    height: 2,
  }
})

export default Tabs
