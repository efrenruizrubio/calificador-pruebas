import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage, QualifiersPage } from './pages/index'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/calificadores' element={<QualifiersPage />} />
      </Routes>
    </div>
  )
}

export default App
