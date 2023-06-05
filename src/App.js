import React from 'react'
import './App.css'
import Body from './components/Body/Body'
import Sidebar from './components/Sidebar/Sidebar'
const App = () => {
  return (
    <div className=' container'>
      <Sidebar />
      <Body />
    </div>
  )
}

export default App
