import { Routes, Route } from 'react-router-dom'
import Header from './header/Header'
import Home from '@/pages/Home'
import ErrorPage from '@/pages/ErrorPage'

const Main = () => {
  return (
    <div id='main'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default Main
