import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cronometro from './assets/components/Cronometro'
import CatalogoProducto from './assets/components/CatalogoProductos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CatalogoProducto />
    </>
  )
}

export default App
