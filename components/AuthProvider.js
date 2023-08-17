import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { fetchUser } from '../api'
import { AuthContext } from '../contexts'

const AuthProvider = ({children}) => {
  const token = useSelector(({$auth}) => $auth.token)
  
  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(() => {
    if (token) {
      fetchUser().then(res => {
        setCurrentUser(res)
      })
    }
  }, [token])

  return (
    <AuthContext.Provider value={currentUser}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider