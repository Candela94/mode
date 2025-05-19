import { useState } from 'react'

import './css/Layout.css'
import { Header } from './components/header/Header'

import { UserContextProvider } from '../context/userContext'

import CoomingSoon from './pages/comming-soon/CommingSoon'
import { Outlet } from 'react-router'


function Layout() {


  return (
    <>

    <UserContextProvider>
     {/* <Header /> */}
     {/* <CoomingSoon /> */}
   
     <Outlet />

     </UserContextProvider>
    </>
  )
}

export default Layout

