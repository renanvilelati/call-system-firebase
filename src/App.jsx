import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { RouterApp } from './routes'
import { GlobalStyle } from './styles/global'

export const App = () => {

  return (
    <BrowserRouter>
      <RouterApp />
      <GlobalStyle />
    </BrowserRouter>
  )
}
