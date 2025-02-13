import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'

import { Header } from './components/Header.jsx'
import { MenuDesplegable } from './components/MenuDesplegable.jsx'
import Proyectos from './pages/Proyectos.jsx'
import Proyecto from './pages/Proyecto.jsx'








function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     {/* <MenuDesplegable /> */}
     <Proyecto />
     <img src="https://drive.google.com/file/d/id=1Xih0O9sOPmkOSWK0YbRG-J567FN3spDu/view?usp=sharing" alt="imagen" />
    
    </>
  )
}

export default App
