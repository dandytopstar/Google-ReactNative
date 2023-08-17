import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { fetchNotifications } from '../api'

import Header from '../components/Header'
import Applist from '../components/App/List'
import NotificationCard from '../components/NotificationCard'

const NotificationScreen = () => {
  const insets = useSafeAreaInsets()

  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    fetchNotifications().then(res => {
      setNotifications(res.data)
    })
  }, [])

  const renderNotification = ({item, index}) => {
    return (
      <NotificationCard {...item} isUnread={index < 2} />
    )
  }

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      {/* <Header title="Notifications" showNotifications={false} /> */}
      <View style={styles.content}>
        <Applist
          withTabBar={false}
          data={notifications}
          renderItem={renderNotification} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  }
})

export default NotificationScreen
