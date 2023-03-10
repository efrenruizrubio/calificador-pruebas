import { Routes, Route } from 'react-router-dom'
import { Header } from './components/index'
import { HomePage, BeckDepressionQualifier } from './pages/index'
import './styles/global.scss'

function App () {
  return (
    <div className='App'>
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/bdi-2' element={<BeckDepressionQualifier />} />
        </Routes>

      </div>
    </div>
  )
}

export default App
