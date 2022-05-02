import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import ErrorPage from '@/pages/ErrorPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='*' element={<ErrorPage />}></Route>
    </Routes>
  )
}

export default App
