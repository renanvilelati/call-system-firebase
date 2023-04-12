import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { RouterApp } from './routes'
import { GlobalStyle } from './styles/global'

import { AuthProvider } from './contexts/auth'

export const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}
