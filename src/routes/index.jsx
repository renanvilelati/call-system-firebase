import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { ErrorPage } from '../pages/ErrorPage'
import { Dashboard } from '../pages/Dashboard'
import { Private } from './Private'

export const RouterApp = () => {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/dashboard' element={<Private> <Dashboard /> </Private>} />

      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  )
}