import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Menu/>
      <Outlet/>
    </>
  )
}

export default App
