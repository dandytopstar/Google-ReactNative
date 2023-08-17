import React, { useState, useEffect, useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'

import { fetchFeedbacks } from '../api'

import Header from '../components/Header'
import Applist from '../components/App/List'
import FeedbackCard from '../components/FeedbackCard'
import FeedbackDetails from '../components/FeedbackDetails'

const FeedbacksScreen = () => {
  const insets = useSafeAreaInsets()

  const [feedbacks, setFeedbacks] = useState([])
  const [currentFeedback, setCurrentFeedback] = useState(null)

  const bottomSheetRef = useRef(null)

  useEffect(() => {
    fetchFeedbacks().then(res => {
      setFeedbacks(res.data)
    })
  }, [])

  const handlePressFeedback = (feedback) => () => {
    setCurrentFeedback(feedback)
    bottomSheetRef.current.present()
  }

  const handleSheetChanges = (point) => {
    if (point === -1) {
      setCurrentFeedback(null)
    }
  }

  const renderFeedback = ({item}) => {
    return (
      <FeedbackCard {...item} onPress={handlePressFeedback(item)} />
    )
  }

  const renderBackdrop = (props) => {
    return (
      <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
    )
  }

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      {/* <Header title="Employee feedback" /> */}
      <View style={styles.content}>
        <Applist
          data={feedbacks}
          renderItem={renderFeedback} />
      </View>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        handleIndicatorStyle={{backgroundColor: '#8083A3', opacity: 0.14}}
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
        snapPoints={['92%']}>
        <FeedbackDetails initialData={currentFeedback} />
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
    flex: 1,
    paddingHorizontal: 16,
  }
})

export default FeedbacksScreen
