import { useState, useEffect, createContext } from 'react'

import { auth, db, storage } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({})


export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {

    async function loadUser() {
      const storageUser = localStorage.getItem('@ticketsPRO')

      if (storageUser) {
        setUser(JSON.parse(storageUser))
        setLoading(false)
      }
      setLoading(false)
    }

    loadUser()

  }, [])

  async function signIn(email, password) {

    setLoadingAuth(true)

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid

        const docRef = doc(db, 'users', uid)
        const docSnap = await getDoc(docRef)

        let data = {
          uid: uid,
          name: docSnap.data().name,
          email: value.user.email,
          avatarUrl: docSnap.data().avatarUrl
        }

        setUser(data)
        storageUser(data)
        setLoadingAuth(false)
        toast.success(`Welcome back, ${data.name.split(' ')[0]}`)
        navigate('/dashboard')
      })
      .catch(error => {
        console.log(error);
        setLoadingAuth(false)
        toast.error('Ops, something wrong')
      })
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
            storageUser(data)
            setLoadingAuth(false)
            toast.success(`Welcome to system, ${name.split(' ')[0]}`)
            navigate('/dashboard')
          })

      })
      .catch(error => {
        console.log(error);
        setLoadingAuth(false)
      })

  }

  function storageUser(data) {
    localStorage.setItem('@ticketsPRO', JSON.stringify(data))
  }

  async function logout() {
    await signOut(auth)
    setUser(null)
    localStorage.removeItem('@ticketsPRO')
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        logout,
        loadingAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}