import './App.css'
import {  Routes ,Route} from "react-router-dom"
import Register from './Components/header/Header';
import Login from './Components/header/Header';
import Home from './Components/header/Header';
import Header from './Components/header/Header';
function App() {

  return (
    <>
      <div className="App">
        <Header/>
      <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>

      </div>
    </>
  )
}

export default App
