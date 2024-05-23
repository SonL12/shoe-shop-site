import './App.css';
import Home  from './Pages/Home';
import Aboutmeqq from './Pages/Aboutmeqq';
import PaymentPage from './Pages/PaymentPage'

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Aboutmeqq/>} />
      <Route path='/home'element={<Home/>} />
      <Route path='/payment'element={<PaymentPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;