import { useState } from 'react'
import UserContext from './context/UserContext'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserContextProvider from './context/UserContextProvider'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>React Site Made By Anish</div>
      <UserContextProvider>
      <Login />
      <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
