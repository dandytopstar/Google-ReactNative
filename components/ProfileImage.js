import React from 'react'
import FastImage from 'react-native-fast-image'
import { Pressable, StyleSheet } from 'react-native'

const defaultImage = require('../assets/images/default_profile.png')

const ProfileImage = ({uri, size = 32, onPress, ...props}) => {
  return (
    <Pressable style={styles.container} onPress={onPress} {...props}>
      <FastImage
        style={{width: size, height: size, borderRadius: size/2, overflow: 'hidden'}}
        source={uri ? {uri: uri} : defaultImage} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})

export default ProfileImage
