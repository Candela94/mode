import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/Layout.css'
import { Header } from './components/header/Header'

import CoomingSoon from './pages/comming-soon/CommingSoon'
import { Outlet } from 'react-router'

function Layout() {


  return (
    <>
     {/* <Header /> */}
     <CoomingSoon />
     {/* <Outlet /> */}
    </>
  )
}

export default Layout

