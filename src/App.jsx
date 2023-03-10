import { Routes, Route } from 'react-router-dom'
import { Header, Test } from './components/index'
import { HomePage, TestsPage, ResultsPage } from './pages/index'
import './styles/global.scss'

function App () {
  return (
    <div className='App'>
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tests' element={<TestsPage />} />
          <Route path='/tests/:id' element={<Test />} />
          <Route path='/resultados' element={<ResultsPage />} />
          <Route path='*' element={<h1>Página no encontrada</h1>} />
        </Routes>

      </div>
    </div>
  )
}

export default App
