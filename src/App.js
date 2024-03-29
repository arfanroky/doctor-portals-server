
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-6'>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/appointment' element={
        <RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>
      }></Route>

    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/signup' element={<SignUp></SignUp>}></Route>

    </Routes>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
