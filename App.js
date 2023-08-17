import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import Toast from 'react-native-toast-message'
import { Provider } from 'react-redux'

import store from './store'

import AuthProvider from './components/AuthProvider'
import Navigation from './navigation'

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <AuthProvider>
                <Navigation />
              </AuthProvider>
            </NavigationContainer>
          </BottomSheetModalProvider>
          <Toast />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App
