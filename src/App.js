import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import AddUser from './pages/Managment/AddUser';
import ViewUser from './pages/Managment/ViewUser';
import EditUser from './pages/Managment/EditUser'



const App = () => {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/adduser' element={<AddUser/>}></Route>
        <Route path='/employee/detail/:empid' element={<ViewUser/>}></Route>
        <Route path='/employee/edit/:empid' element={<EditUser/>}></Route>
       </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
