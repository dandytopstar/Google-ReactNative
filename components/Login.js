import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Toast from 'react-native-toast-message'

import { MAIN_COLOR } from '../config'
import { login } from '../api'

import AppText from './App/Text'
import AppInput from './App/Input'
import AppCheckBox from './App/CheckBox'
import AppButton from './App/Button'

const Login = ({onChangeForm, onSuccessLogin}) => {

  const [rememberMe, setRememberMe] = useState(false)
  const [form, setForm] = useState({email: '', password: ''})

  const handlePressRecover = () => {

  }

  const handlePressSignUp = () => {
    onChangeForm('signup')
  }

  const handleChangeForm = (field) => (value) => {
    setForm(state => ({
      ...state,
      [field]: value,
    }))
  }

  const handleLogin = () => {
    const post = {
      identifier: form.email,
      password: form.password,
    }
    login(post).then(res => {
      console.log('res', res)
      if (res.jwt) {
        onSuccessLogin(res.jwt)
      } else if (res.error && res.data && Array.isArray(res.data)) {
        const [error] = res.data
        error.messages.forEach(error => {
          Toast.show({
            type: 'error',
            text1: error.message,
          })
        })
      }
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText size={16}>Sign In</AppText>
      </View>
      <View style={styles.form}>
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
        <View style={[styles.row, {marginBottom: 30}]}>
          <AppCheckBox label="Remember me" value={rememberMe} onChange={value => setRememberMe(value)} />
          <TouchableOpacity onPress={handlePressRecover}>
            <AppText color={MAIN_COLOR}>Recover password</AppText>
          </TouchableOpacity>
        </View>
        <AppButton onPress={handleLogin}>
          Sign In
        </AppButton>
        <View style={[styles.row, {marginVertical: 26}]}>
          <View style={styles.line} />
          <AppText color="#8083A3" size={14} weight={400} style={{marginHorizontal: 30}}>Or</AppText>
          <View style={styles.line} />
        </View>
      </View>
      <View style={[styles.row, styles.footer]}>
        <AppText color="#8083A3" size={14}>Don’t have an account</AppText>
        <TouchableOpacity onPress={handlePressSignUp}>
          <AppText color={MAIN_COLOR}>Sign Up</AppText>
        </TouchableOpacity>
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

export default Login
