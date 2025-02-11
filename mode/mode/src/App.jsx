import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'

import { Header } from './components/Header.jsx'
import { MenuDesplegable } from './components/MenuDesplegable.jsx'
import Proyectos from './pages/Proyectos.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     {/* <MenuDesplegable /> */}
     <Proyectos />
     
    </>
  )
}

export default App
