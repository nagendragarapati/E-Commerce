import {Route, Routes,BrowserRouter} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/" element={<Home/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
  </BrowserRouter>
)

export default App
