import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TAB_BAR_HEIGHT } from '../../config'

const List = ({withTabBar = true, ...props}) => {
  const insets = useSafeAreaInsets()
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{paddingTop: 24}}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={withTabBar ? <View style={{height: TAB_BAR_HEIGHT+insets.bottom+15+24}} /> : null}
        {...props} />
      <LinearGradient
        colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
        style={styles.gradient} />
      <LinearGradient
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
        locations={[0, 0.3]}
        style={[styles.gradient, {bottom: 0, height: (withTabBar ? (TAB_BAR_HEIGHT+15+24) : 0)+insets.bottom}]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  gradient: {
    position: 'absolute',
    height: 24,
    width: '100%',
    zIndex: 2,
  }
})

export default List


