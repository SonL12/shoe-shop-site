import './App.css';
import Home  from './Pages/Home';
import Aboutmeqq from './Pages/Aboutmeqq';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/more-info'element={<Aboutmeqq/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;