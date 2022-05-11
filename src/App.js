
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

import Navbar from './Pages/Shared/Navbar/Navbar';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>

    <Route path='/login' element={<Login></Login>}></Route>

    </Routes>
    </>
  );
}

export default App;
