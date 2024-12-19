import {  Route,BrowserRouter, Routes  } from 'react-router-dom';
import Home from './page/Home/Home.jsx';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header.jsx';
const App = () => {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path='/' element={<Home/>}/>
  </Routes>
  </BrowserRouter>

  )
}

export default App