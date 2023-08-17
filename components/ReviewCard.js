import React from 'react'
import { View, StyleSheet } from 'react-native'
import moment from 'moment'

import AppText from './App/Text'
import ProfileImage from './ProfileImage'

const ReviewCard = ({text, owner, publishDate}) => {
  return (
    <View style={styles.container}>
      <ProfileImage size={38} uri={owner.picture} style={{marginRight: 12}} />
      <View style={{flex: 1}}>
        <View style={styles.row}>
          <AppText weight={500}>{ owner.firstName } { owner.lastName }</AppText>
          <AppText color="#8083A3" weight={500}>{ moment(publishDate).fromNow() }</AppText>
        </View>
        <AppText color="#8083A3" size={14} weight={400}>{ text }</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 89,
    borderWidth: 1,
    borderColor: 'rgba(228, 230, 232, 0.6)',
    borderRadius: 14,
    marginBottom: 8,
    padding: 12,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  }
})

export default ReviewCard
