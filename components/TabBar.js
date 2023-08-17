import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { MAIN_COLOR, TAB_BAR_HEIGHT } from '../config'

import { CircleIcon, PhoneIcon, MessageIcon, ProfileIcon, NotificationIcon, RequestIcon } from './Icons'

const TAB_CONFIG = {
  Analytics: {
    icon: CircleIcon
  },
  Reviews: {
    icon: PhoneIcon
  },
  Feedbacks: {
    icon: MessageIcon
  },
  Profile: {
    icon: ProfileIcon
  },
  Notifications: {
    icon: NotificationIcon
  },
  Requests: {
    icon: RequestIcon
  }
}

const TabStack = ({navigation, state}) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      <View style={styles.content}>
        {
          state.routes.map((route) => {
            const Icon = TAB_CONFIG[route.name].icon
            const isFocused = state.routes[state.index].name === route.name

            const onPress = () => {
              if (isFocused) {
                return
              }
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              })
              
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name)
              }
            }

            return (
              <Pressable
                key={route.key}
                style={[styles.tab, {backgroundColor: isFocused ? MAIN_COLOR : 'transparent'}]}
                onPress={onPress}>
                <Icon width={24} height={24} color={isFocused ? '#fff' : MAIN_COLOR} />
              </Pressable>
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 15,
    width: '100%',
  },
  content: {
    height: TAB_BAR_HEIGHT,
    backgroundColor: '#fff',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#999BA8',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tab: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  }
})

export default TabStack
