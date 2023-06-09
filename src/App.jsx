import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { RouterApp } from './routes'
import { GlobalStyle } from './styles/global'

import { AuthProvider } from './contexts/auth'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000} />
        <RouterApp />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}
