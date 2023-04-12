import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { RouterApp } from './routes'

export const App = () => {

  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  )
}
