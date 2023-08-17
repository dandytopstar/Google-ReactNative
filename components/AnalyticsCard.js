import React from 'react'
import { View, StyleSheet } from 'react-native'

import { CheckIcon, CartIcon, CallIcon, ReviewIcon, RedeemIcon, ArrowIcon } from './Icons'
import AppText from './App/Text'

const TYPE_CONFIG = {
  referals: {
    color: '#F5F5FA',
    icon: CheckIcon,
    description: 'Referrals',
  },
  referalsWhoPurchased: {
    color: '#5FDCB3',
    icon: CartIcon,
    description: 'Referrals, who purchased',
  },
  numberOfCallsToGoogleBusiness: {
    color: '#3E7EFF',
    icon: CallIcon,
    description: 'Number of calls to Google Business',
  },
  newGoogleReviewsSubmitted: {
    color: '#FBB0BF',
    icon: ReviewIcon,
    description: 'New Google reviews submitted',
  },
  rewards: {
    color: '#EF8354',
    icon: RedeemIcon,
    description: 'Rewards gifted to customers',
  },
}

const AnalyticsCard = ({type, value, period, ...props}) => {
  const config = TYPE_CONFIG[type]

  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, {backgroundColor: config.color}]}>
        <config.icon />
      </View>
      <View style={{flex: 1, marginRight: 8}}>
        <AppText size={16}>{ value }</AppText>
        <AppText color="#8083A3" size={14} weight={400}>{ config.description }</AppText>
      </View>
      <View style={{height: '100%', marginLeft: 'auto', alignItems: 'flex-end'}}>
        <View style={styles.row}>
          {/* <AppText color={percentage >= 0 ? '#5FDCB3' : '#FBB0BF'} style={{marginRight: 3}}>{ percentage }%</AppText> */}
          {/* <ArrowIcon color={percentage >= 0 ? '#5FDCB3' : '#FBB0BF'} /> */}
        </View>
        <AppText color="#8083A3" weight={500}>During last { period }</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderWidth: 1,
    borderColor: 'rgba(228, 230, 232, 0.6)',
    borderRadius: 14,
    marginBottom: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  }
})

export default AnalyticsCard
