import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'

import { fetchRequests } from '../api'

import Header from '../components/Header'
import RequestCard from '../components/RequestCard'
import ReferralRequest from '../components/ReferralRequest'
import AppButtonTabs from '../components/App/ButtonTabs'
import AppTabs from '../components/App/Tabs'
import AppList from '../components/App/List'

const TABS = [
  {key: 'active', title: 'Requests'},
  {key: 'completed', title: 'History'}
]

const RANGE_OPTIONS = [
  {title: 'Week', key: 'week'},
  {title: 'Month', key: 'month'},
  {title: 'Year', key: 'year'},
]

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const RequestsScreen = () => {
  const insets = useSafeAreaInsets()

  const bottomSheetRef = useRef(null)

  const [currentTab, setCurrentTab] = useState('active')
  const [currentRange, setCurrentRange] = useState('week')
  const [activeUser, setActiveUser] = useState(null)
  const [requests, setRequests] = useState({active: [], completed: []})

  useEffect(() => {
    // fetchRequests(currentTab).then(res => {
    //   setRequests(state => ({
    //     ...state,
    //     [currentTab]: res.data.map(el => ({...el, type: currentTab, isApproved: Boolean(randomIntFromInterval(0, 1))}))
    //   }))
    // })
  }, [currentTab])

  const handleChangeTab = value => {
    setCurrentTab(value)
  }

  const handleChangeRange = value => {
    setCurrentRange(value)
  }

  const handlePressRequest = user => () => {
    setActiveUser(user)
    bottomSheetRef.current.present()
  }

  const handleCloseBottomSheet = () => {
    bottomSheetRef.current.close()
  }

  const renderRequest = ({item}) => {
    return (
      <RequestCard {...item} onPress={handlePressRequest(item)} />
    )
  }

  const renderBackdrop = (props) => {
    return (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
    )
  }

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      {/* <Header title="Approval & Deny" /> */}
      <View style={styles.content}>
        <AppButtonTabs options={TABS} active={currentTab} onChange={handleChangeTab} />
        {
          currentTab === 'completed'
            ? <AppTabs
                style={{marginLeft: -7}}
                options={RANGE_OPTIONS}
                active={currentRange}
                onChange={handleChangeRange} />
            : null
        }
        <AppList
          data={requests[currentTab]}
          renderItem={renderRequest} />
      </View>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        handleIndicatorStyle={{backgroundColor: '#8083A3', opacity: 0.14}}
        backdropComponent={renderBackdrop}
        // onChange={handleSheetChanges}
        snapPoints={['70%']}>
        <ReferralRequest initialData={activeUser} onClose={handleCloseBottomSheet} />
      </BottomSheetModal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 29,
    flex: 1,
  }
})

export default RequestsScreen
