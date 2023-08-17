import React, { useRef, useEffect, useState } from 'react'
import { View, StyleSheet, Animated, Pressable } from 'react-native'

import { MAIN_TEXT_COLOR } from '../../config'

import AppText from './Text'

const ButtonTabs = ({options, active, onChange}) => {
  const badgeValue = useRef(new Animated.Value(0)).current

  const [containerWidth, setContainerWidth] = useState(0)

  const badgeWidth = (containerWidth - 8) / options.length

  useEffect(() => {
    if (containerWidth) {
      const currentIndex = options.findIndex(el => el.key === active)
      Animated.timing(badgeValue, {
        toValue: badgeWidth * currentIndex,
        useNativeDriver: true,
        duration: 200,
      }).start()
    }
  }, [containerWidth, active])

  const handleLayout = ({nativeEvent}) => {
    setContainerWidth(nativeEvent.layout.width)
  }

  const handlePress = option => () => {
    onChange(option.key)
  }

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <Animated.View style={[styles.badge, {width: badgeWidth, transform: [{translateX: badgeValue}]}]} />
      {
        options.map((option) => {
          const isActive = option.key === active
          return (
            <Pressable key={option.key} style={styles.option} onPress={handlePress(option)}>
              <AppText size={14} color={isActive ? MAIN_TEXT_COLOR : '#8083A3'}>{ option.title }</AppText>
            </Pressable>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F6FF',
    height: 49,
    flexDirection: 'row',
    borderRadius: 29,
    padding: 4,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {  
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 29,
    bottom: 4,
    top: 4,
    left: 4,
    shadowColor: '#999BA8',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  }
})

export default ButtonTabs
