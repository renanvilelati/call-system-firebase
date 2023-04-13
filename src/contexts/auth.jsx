import { useState, useEffect, createContext } from 'react'

import { auth, db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export const AuthContext = createContext({})


export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false)

  function signIn(email, password) {
    console.log(email + ' ' + password);
    alert('logado com sucesso')
  }

  async function signUp(name, email, password) {

    setLoadingAuth(true)

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid

        await setDoc(doc(db, 'users', uid), {
          name: name,
          avatarUrl: null
        })
          .then(() => {

            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
              avatarUrl: null
            }

            setUser(data)

            setLoadingAuth(false)
          })

      })
      .catch(error => {
        console.log(error);
        setLoadingAuth(false)
      })

  }



  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        loadingAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}