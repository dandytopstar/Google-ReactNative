import React, { useRef, useEffect, useState } from 'react'
import { View, StyleSheet, Animated } from 'react-native'

const ProgressBar = ({percentage}) => {

  const [containerWidth, setContainerWidth] = useState(0)
  const animatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (percentage && containerWidth) {
      animatedValue.setValue(-containerWidth)
      Animated.timing(animatedValue, {
        toValue: containerWidth * (1 - percentage) * -1,
        useNativeDriver: true
      }).start()
    }
    
  }, [percentage, containerWidth])

  const handleLayout = ({nativeEvent}) => {
    setContainerWidth(nativeEvent.layout.width)
  }

  return (
    <View style={styles.container}>
      <View style={styles.layout} onLayout={handleLayout}>
        <Animated.View style={[styles.fill, {transform: [{translateX: animatedValue}]}]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(239, 131, 84, 1)',
    height: 6,
    borderRadius: 3,
    
  },
  layout: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    flex: 1,
    borderRadius: 3,
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: '#EF8354',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    borderRadius: 3,
  }
})

export default ProgressBar
