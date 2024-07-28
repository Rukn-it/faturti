import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';


const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path='/home' exact element={<Home />} />
      <Route path='/login' exact element={''} />
      <Route path='/signup' exact element={''} />
    </Routes>
  </Router>
);

const App = () => {
  return <div>{routes}</div>

};

export default App;