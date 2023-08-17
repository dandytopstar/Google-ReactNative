import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { fetchFeedback } from '../api'

import ProfileImage from './ProfileImage'
import ProgressBar from './ProgressBar'
import ReviewCard from './ReviewCard'
import AppText from './App/Text'

const FeedbackDetails = ({initialData}) => {
  const insets = useSafeAreaInsets()

  const [feedback, setFeedback] = useState(initialData)

  const name = `${feedback.owner.firstName} ${feedback.owner.lastName}`

  useEffect(() => {
    if (initialData?.id) {
      fetchFeedback(initialData.id).then(res => {
        setFeedback(state => ({
          ...state,
          comments: res.data,
        }))
      })
    }
  }, [initialData])

  const renderComments = ({item}) => {
    return (
      <ReviewCard {...item} text={item.message} />
    )
  }

  console.log(feedback.comments)

  return (
    <View style={styles.container}>
      <ProfileImage size={105} uri={feedback.owner.picture} style={{marginBottom: 8}} />
      <AppText size={22}>{ name }</AppText>
      <AppText color="#8083A3" size={14} weight={400}>{ `${feedback.owner.firstName}@${feedback.owner.lastName}.com`.toLowerCase() }</AppText>
      <View style={styles.section}>
        <AppText size={16}>{ `${name}'s rating` }</AppText>
        <AppText color="#8083A3" style={{marginBottom: 18}}>See the rating, Cayla Brister got from last reviews</AppText>
        <ProgressBar percentage={0.7} />
        <View style={styles.row}>
          <AppText color="#8083A3" size={14} weight={400}>Mark is</AppText>
          <AppText size={14}>3.7</AppText>
        </View>
      </View>
      <View style={styles.section}>
        <AppText size={16}>{ `${name}'s feedbacks` }</AppText>
        <AppText color="#8083A3" style={{marginBottom: 18}}>See the last reviews, { name } got</AppText>
      </View>
      <View style={{flex: 1, width: '100%', paddingHorizontal: 16, paddingBottom: insets.bottom}}>
      <BottomSheetFlatList
        style={{}}
        showsVerticalScrollIndicator={false}
        data={feedback.comments}
        renderItem={renderComments} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 24,
    flex: 1,
  },
  section: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
  }
})

export default FeedbackDetails
