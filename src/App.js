import Home from './views/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Auth/Login';
import Signup from './views/Auth/Signup';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route path='/'element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
