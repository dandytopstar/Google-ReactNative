import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Toast from 'react-native-toast-message'

import { signUp } from '../api'

import AppText from './App/Text'
import AppInput from './App/Input'
import AppCheckBox from './App/CheckBox'
import AppButton from './App/Button'

const SignUp = ({onSuccessSignUp}) => {

  const [form, setForm] = useState({name: '', email: '', password: ''})
  const [terms, setTerms] = useState(false)
  const [notifications, setNotifications] = useState(false)

  const handleSignUp = () => {
    const post = {
      firstname: form.name,
      lastname: '',
      username: form.email,
      email: form.email,
      password: form.password,
      confirmPassword: form.password,
    }
    signUp(post).then(res => {
      if (res.jwt) {
        onSuccessSignUp(res.jwt)
      } else if (res.error && res.data && Array.isArray(res.data)) {
        const [error] = res.data
        error.messages.forEach(error => {
          Toast.show({
            type: 'error',
            text1: error.message,
          })
        })
      }
    }).catch(error => {
      console.log(error)
    })
  }

  const handleChangeForm = (field) => (value) => {
    setForm(state => ({
      ...state,
      [field]: value,
    }))
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText size={16}>Create an account</AppText>
      </View>
      <View style={styles.form}>
        <AppInput
          value={form.name}
          onChangeText={handleChangeForm('name')}
          label="Full name"
          containerStyle={{marginBottom: 16}} />
        <AppInput
          value={form.email}
          onChangeText={handleChangeForm('email')}
          label="Email"
          containerStyle={{marginBottom: 16}} />
        <AppInput
          value={form.password}
          onChangeText={handleChangeForm('password')}
          label="Your Password"
          secureTextEntry
          containerStyle={{marginBottom: 16}} />
      </View>
      <View style={styles.content}>
        <AppCheckBox
          value={terms}
          onChange={value => setTerms(value)}
          containerStyle={{marginBottom: 16}}
          label="I agree with terms & conditions" />
        <AppCheckBox
          value={notifications}
          onChange={value => setNotifications(value)}
          containerStyle={{marginBottom: 16}}
          label="Allow Notifications" />
        <AppButton onPress={handleSignUp}>
          Proceed
        </AppButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(228, 230, 232, 0.85)',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 38,
  },
  form: {
    paddingLeft: 28,
  },
  content: {
    paddingHorizontal: 28,
    marginTop: 'auto',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    backgroundColor: '#E4E6E8',
    height: 1,
    flex: 1,
  },
  footer: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#E4E6E8',
    height: 68,
    paddingHorizontal: 28,
  }
})

export default SignUp
