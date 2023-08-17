import React from 'react'
import { View, StyleSheet } from 'react-native'

import ProfileImage from './ProfileImage'
import AppText from './App/Text'
import AppButton from './App/Button'

const RequestCard = ({type, picture, firstName, lastName, isApproved, onPress}) => {
  const name = `${firstName} ${lastName}`
  const email = `${firstName}@example.com`
  switch (type) {
    case 'active':
      return (
        <View style={[styles.container, {height: 88, padding: 20}]}>
          <ProfileImage uri={picture} size={48} style={{marginRight: 12}} />
          <View>
            <AppText size={16}>{ name }</AppText>
            <AppText color="#8083A3" weight={500}>{ email }</AppText>
          </View>
          <AppButton style={{height: 42, width: 108, marginLeft: 'auto'}} onPress={onPress}>Decide</AppButton>
        </View>
      )
    case 'completed':
      return (
        <View style={[styles.container, {height: 80}]}>
          <ProfileImage uri={picture} size={40} style={{marginRight: 8}} />
          <View style={{flex: 1}}>
            <AppText numberOfLines={1} size={16}>{ name }</AppText>
            <AppText numberOfLines={1} color="#8083A3" weight={500}>{ email }</AppText>
          </View>
          <View style={[styles.label, {backgroundColor: isApproved ? '#F2FFF6' : '#FFF6F6'}]}>
            <AppText color={isApproved ? '#27D858' : '#E74E4E'}>{ isApproved ? 'Approved'  : 'Declined'}</AppText>
          </View>
          <AppText color="#8083A3" weight={500}>2mo ago</AppText>
        </View>
      )
    default:
      return null
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'rgba(228, 230, 232, 0.6)',
    borderRadius: 14,
    marginBottom: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    width: 72,
    height: 42,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
  }
})

export default RequestCard
