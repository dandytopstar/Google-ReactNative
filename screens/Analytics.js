import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

import { fetchAnalytics } from '../api'

import AppText from '../components/App/Text'
import AppTabs from '../components/App/Tabs'
import Applist from '../components/App/List'
import AnalyticsCard from '../components/AnalyticsCard'

const TAB_OPTIONS = [
  {title: 'Week', key: 'week'},
  {title: 'Month', key: 'month'},
  {title: 'Year', key: 'year'},
]

const AnalyticsScreen = ({navigation}) => {
  const insets = useSafeAreaInsets()
  const isFocused = useIsFocused()

  const token = useSelector(({$auth}) => $auth.token)

  const [currentTab, setCurrentTab] = useState('week')
  const [analytics, setAnalytics] = useState({})

  useEffect(() => {
    if (isFocused) {
      // fetchAnalytics(token).then(res => {
      //   setAnalytics(res)
      // })
    }
  }, [token, isFocused])

  const handleChangeTab = value => {
    setCurrentTab(value)
  }

  const renderAnalytic = ({item}) => {
    const [type, value] = item
    return (
      <AnalyticsCard type={type} value={value} period={currentTab} />
    )
  }

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.content}>
        <View style={{backgroundColor: '#EF8354', borderRadius: 6, marginBottom: 24}}>
          <View style={styles.warningCard}>
            <AppText color="#EF8354">Please, notice, that you have not connected your Google account, so we cant track your Google Data. If you want to do this, you need to connect your Google account on General Profile page.</AppText>
          </View>
        </View>
        <AppText size={22}>Welcome, Miriam</AppText>
        <AppText color="#8083A3" size={14} weight={400}>Check out latest updates</AppText>
        <AppTabs
          style={{marginLeft: -7}}
          options={TAB_OPTIONS}
          active={currentTab}
          onChange={handleChangeTab} />
        <View style={{flex: 1}}>
          <Applist
            style={{paddingTop: 16}}
            data={Object.entries(analytics)}
            renderItem={renderAnalytic} />
        </View>
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
    paddingTop: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
  warningCard: {
    padding: 9,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  }
})

export default AnalyticsScreen
