import React from 'react'
import LeftPane from './LeftPane'
import Dashboard from './Dashboard'
import Navbar from './Navbar'

function HomePage() {
  return (
    <div>
        <Navbar />
        <LeftPane />
        <Dashboard />

    </div>
  )
}

export default HomePage