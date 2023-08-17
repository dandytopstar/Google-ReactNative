import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppText from './App/Text'
import { NotificationIcon } from './Icons'
import { MAIN_COLOR } from '../config'

const NotificationCard = ({firstName, isUnread}) => {
  
  return (
    <View style={[styles.container, {borderWidth: isUnread ? 2 : 1, borderColor: isUnread ? MAIN_COLOR : 'rgba(228, 230, 232, 0.6)'}]}>
      <View style={styles.iconContainer}>
        <NotificationIcon width={14} height={14} />
      </View>
      <View style={{flex: 1}}>
        <AppText size={14}>You have a new feedback from { firstName } <AppText weight={400}>“How To Write Better Advertising Graphic designers always manage”</AppText></AppText>
      </View>
      <AppText color="#8083A3" weight={500}>1m ago</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    borderRadius: 14,
    marginBottom: 8,
    padding: 16,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  iconContainer: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#F4F4F4',
    marginRight: 8,
  }
})

export default NotificationCard
